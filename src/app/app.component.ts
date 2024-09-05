import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuComponent } from "./components/app-menu/app-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
