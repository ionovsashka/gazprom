import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import { RouterLink } from "@angular/router";

/**
 * Компонент меню на платформе.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: 'app-menu.component.html',
  styleUrl: 'app-menu.component.scss'
})
export class AppMenuComponent {

}
