import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from '@angular/core';
import { CyberSecurityInstructionComponent } from "../components/cyber-security-instruction/cyber-security-instruction.component";
import { Insctuction } from "../../cyber-security/models/insctuction.model";
import { CyberSecurityRoutingModule } from "../cyber-security-routing.module";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CyberSecurityRoutingModule, CyberSecurityInstructionComponent, NgOptimizedImage],
  templateUrl: 'cyber-security.component.html',
  styleUrl: 'cyber-security.component.scss'
})
export class CyberSecurityComponent {
  //region Fields

  /**
   * Список инструкций.
   */
  readonly instructions: Insctuction[] = [
    {
      fileLink: "file:////home/aionov/untitled/src/assets/instructions/cyber-security-instruction_1.pdf",
      name: "Инструкция по кибербезопасности_1"
    },
    {
      fileLink: "file:////home/aionov/untitled/src/assets/instructions/cyber-security-instruction_2.pdf",
      name: "Инструкция по кибербезопасности_2"
    },
  ]

  //endregion
}
