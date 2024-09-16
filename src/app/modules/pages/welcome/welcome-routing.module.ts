import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { WelcomeComponent } from "../welcome/container/welcome.component";

/**
 * Пути модуля вступительной страницы.
 */
const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  }
]

/**
 * Routing модуля с обучающими материалами.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}

