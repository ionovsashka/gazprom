import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ChevronRightComponent } from "../../../common/shared/components/svg/chevron-right/chevron-right.component";
import { CyberSecurityComponent } from "../../../common/shared/components/svg/cyber-security/cyber-security.component";
import { TrainingRoutingModule } from "../training-routing.module";

/**
 * Компонент страницы модуля с обучающими материалами.
 */
@Component({
  standalone: true,
  imports: [TrainingRoutingModule, CyberSecurityComponent, ChevronRightComponent],
  templateUrl: 'training.component.html',
  styleUrl: 'training.component.scss'
})
export class TrainingComponent {

}
