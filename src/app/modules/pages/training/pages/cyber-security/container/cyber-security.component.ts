import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, inject } from "@angular/core";
import { Component } from '@angular/core';
import { CyberSecurityInstructionComponent } from "../components/cyber-security-instruction/cyber-security-instruction.component";
import { Insctuction } from "../../cyber-security/models/insctuction.model";
import { CyberSecurityRoutingModule } from "../cyber-security-routing.module";
import { Router } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CyberSecurityRoutingModule, CyberSecurityInstructionComponent, NgOptimizedImage],
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

  showSuccessMessage: boolean = false;

  //endregion
  //region Public

  answerOnQuestion(status: boolean) {
    if(!status) {
      this.errorCode = this.randomNumber(1,4);
      return;
    }

    this.showSuccessMessage = true;
  }

randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

nextBtnClickHandler() {
  if (this.currentQuestion === 3) {
    this._router.navigate(["training"])
    return;
  }

  this.currentQuestion++;
  this.showSuccessMessage = false;
}

  //endregion
}
