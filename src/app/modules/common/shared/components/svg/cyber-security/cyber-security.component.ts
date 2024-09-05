import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";

/**
 * Компонент иконки информационная безопасность.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cyber-security-svg',
  standalone: true,
  templateUrl: 'cyber-security.component.svg',
  styleUrl: 'cyber-security.component.scss'
})
export class CyberSecurityComponent {}
