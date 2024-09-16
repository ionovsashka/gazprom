import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, inject } from "@angular/core";
import { Component } from '@angular/core';
import { Insctuction } from "../../cyber-security/models/insctuction.model";
import { CyberSecurityRoutingModule } from "../cyber-security-routing.module";
import { Router } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CyberSecurityRoutingModule, NgOptimizedImage],
  templateUrl: 'cyber-security.component.html',
  styleUrl: 'cyber-security.component.scss'
})
export class CyberSecurityComponent {
  //region DI

  private readonly _router: Router = inject(Router);

  //endregion
  //region Fields

  currentQuestion: number = 1;

  errorCode: number | null = null;

  successCode: number | null = null;

  //endregion
  //region Public

  answerOnQuestion(status: boolean) {
    if(!status) {
      this.errorCode = this.randomNumber(1,4);
      return;
    }

    this.successCode = 1;
  }

randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

nextBtnClickHandler() {
  if (this.currentQuestion === 3) {
    this._router.navigate(["tests"], { queryParams: { status: "passed" }})
    return;
  }

  this.currentQuestion++;
  this.successCode = null;
}

  //endregion
}
