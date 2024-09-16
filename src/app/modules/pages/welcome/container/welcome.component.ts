import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { WelcomeRoutingModule } from "../welcome-routing.module";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    WelcomeRoutingModule
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
