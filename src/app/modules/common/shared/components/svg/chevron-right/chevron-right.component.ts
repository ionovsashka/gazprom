import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from '@angular/core';

/**
 * Компонент иконки треугольной скобки (шеврона), направленной вправо.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'chevron-right-svg',
  standalone: true,
  templateUrl: 'chevron-right.component.svg',
  styleUrl: 'chevron-right.component.scss'
})
export class ChevronRightComponent {

}
