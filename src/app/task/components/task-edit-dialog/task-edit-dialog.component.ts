import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-task-edit-dialog",
  templateUrl: "./task-edit-dialog.component.html",
  styleUrls: ["./task-edit-dialog.component.scss"],
})
export class TaskEditDialogComponent {
  form!: FormGroup;
  colors: string[] = ['gray', 'blue', 'green', 'red'];
  isEditTask: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.isEditTask = data.isEditTask;

    this.form = new FormGroup({
      color: new FormControl(this.isEditTask ? this.data.color : null, Validators.required),
      description: new FormControl(this.isEditTask ? this.data.description : null, Validators.required),
      title: new FormControl(this.isEditTask ? this.data.title : null, Validators.required),
    });
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close(null);
  }
}
