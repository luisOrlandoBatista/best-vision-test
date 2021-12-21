import {Component} from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {filter} from 'rxjs/operators';
import {TaskEditDialogComponent} from "../task-edit-dialog/task-edit-dialog.component";

interface Task {
  title: string;
  color: string;
  description: string;
}

interface TaskList {
  title: string;
  color: string;
  tasks: Task[];
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  pendingTask: TaskList[] = [
    {
      title: 'Tareas Sin Asignar',
      color: 'red',
      tasks: [
        {
          title: 'Tarea 1',
          color: 'blue',
          description: 'Esta description'
        }
      ],
    },
    {
      title: 'Tareas del Sprint 1',
      color: 'blue',
      tasks: [
        {
          title: 'Tarea 1',
          color: 'blue',
          description: 'Esta description'
        }
      ],
    },
    {
      title: 'Tareas en Revision',
      color: 'red',
      tasks: [
        {
          title: 'Tarea 2',
          color: 'gray',
          description: 'Esta description'
        },
        {
          title: 'Tarea 3',
          color: 'red',
          description: 'Esta description de otra'
        }
      ],
    },
  ];
  form: FormGroup = new FormGroup({
    color: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
  });

  colors: string[] = ['gray', 'blue', 'green', 'red'];

  constructor(public dialog: MatDialog) {}

  addTask() {
    const data = this.form.value;
    this.pendingTask[0].tasks.push({
      title: data.title,
      description: data.description,
      color: data.color
    });
    this.form.reset();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  editTask(i: number, j: number) {
    const task = this.pendingTask[i].tasks[j];
    this.dialog.open(TaskEditDialogComponent, {
      data: {
        color: task.color,
        description: task.description,
        title: task.title,
        isEditTask: true
      },
    }).afterClosed()
      .pipe(filter((name) => name))
      .subscribe((response) => {
        if (response != null) {
          this.pendingTask[i].tasks[j] = response;
        }
      });
  }
}
