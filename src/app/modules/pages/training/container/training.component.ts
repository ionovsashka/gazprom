import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ChevronRightComponent } from "../../../common/shared/components/svg/chevron-right/chevron-right.component";
import { CyberSecurityComponent } from "../../../common/shared/components/svg/cyber-security/cyber-security.component";
import { TrainingRoutingModule } from "../training-routing.module";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SuccessSvg } from '../../../common/shared/components/svg/success/success.component';

/**
 * Компонент страницы модуля с обучающими материалами.
 */
@Component({
  standalone: true,
  imports: [TrainingRoutingModule, CyberSecurityComponent, ChevronRightComponent, SuccessSvg],
  templateUrl: 'training.component.html',
  styleUrl: 'training.component.scss'
})
export class TrainingComponent {
  //region DI

  private readonly _route: ActivatedRoute = inject(ActivatedRoute);

  private readonly _router: Router = inject(Router);

  //endregion
  //region Fields

  isPassed: boolean = false;

  //endregion
  //region Ctor

  constructor() {
    this._route.queryParams.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.isPassed = params["status"] === "passed"
    })
  }

  //endregion
  //region Public

  goToPassTest() {
    if (this.isPassed) {
      alert("Вы уже прошли этот тест")
    } else {
      this._router.navigate(["/tests/cyber-security"])
    }
  }

  //endregion
}
