import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import {TaskListComponent} from "./components/task-list/task-list.component";

export const routes: Routes = [
  {
    path: '', component: TaskListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class TaskRoutingModule { }
