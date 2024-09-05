import { Type } from "@angular/core";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "training",
  },
  {
    path: "training",
    loadComponent: (): Promise<Type<unknown>> =>
      import("./modules/pages/training/container/training.component").then(
        (module) => module.TrainingComponent,
      ),
  },
  {
    path: "training/cyber-security",
    loadComponent: (): Promise<Type<unknown>> =>
      import("../app/modules/pages/training/pages/cyber-security/container/cyber-security.component").then(
        (module) => module.CyberSecurityComponent,
      ),
  }
];
