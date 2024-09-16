import { Type } from "@angular/core";
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "welcome",
  },
  {
    path: "welcome",
    loadComponent: (): Promise<Type<unknown>> =>
      import("./modules/pages/welcome/container/welcome.component").then(
        (module) => module.WelcomeComponent,
      ),
  },
  {
    path: "training",
    loadComponent: (): Promise<Type<unknown>> =>
      import("./modules/pages/training-real/container/training-real.component").then(
        (module) => module.TrainingRealComponent,
      ),
  },
  {
    path: "tests",
    loadComponent: (): Promise<Type<unknown>> =>
      import("./modules/pages/training/container/training.component").then(
        (module) => module.TrainingComponent,
      ),
  },
  {
    path: "tests/cyber-security",
    loadComponent: (): Promise<Type<unknown>> =>
      import("../app/modules/pages/training/pages/cyber-security/container/cyber-security.component").then(
        (module) => module.CyberSecurityComponent,
      ),
  }
];
