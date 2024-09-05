import { Type } from "@angular/core";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { TrainingComponent } from "./container/training.component";


/**
 * Пути модуля с обучающими материалами.
 */
const routes: Routes = [
  {
    path: "",
    component: TrainingComponent,
  }
]

/**
 * Routing модуля с обучающими материалами.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}

