import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { CyberSecurityComponent } from "./container/cyber-security.component";

/**
 * Пути модуля по информационной безопасности.
 */
const routes: Routes = [
  {
    path: "",
    component: CyberSecurityComponent,
  }
]

/**
 * Routing модуля по информационной безопасности.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberSecurityRoutingModule {}
