import { input } from "@angular/core";
import { InputSignal } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cyber-security-instruction',
  standalone: true,
  templateUrl: 'cyber-security-instruction.component.html',
  styleUrl: 'cyber-security-instruction.component.scss'
})
export class CyberSecurityInstructionComponent {
  //region Inputs

  /**
   * Ссылка на файл.
   */
  readonly fileLink: InputSignal<string> = input.required();

  /**
   * Название файла.
   */
  readonly name: InputSignal<string> = input.required();

  //endregion
}
