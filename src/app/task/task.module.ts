import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TaskRoutingModule} from "./task-routing.module";
import {MaterialModule} from "../material.module";
import {TaskEditDialogComponent} from "./components/task-edit-dialog/task-edit-dialog.component";

@NgModule({
  declarations: [TaskListComponent, TaskEditDialogComponent],
  imports: [
    TaskRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [],
  exports: [],
  providers: [],
})
export class TaskModule { }
