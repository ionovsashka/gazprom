import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * Компонент иконки залитого кружка с галочкой внутри для отображения чего-то успешно выполненного
 * или завершённого.
 */
@Component({
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "success-svg",
    templateUrl: "success.component.svg",
    styleUrls: ["success.component.scss"],
})
export class SuccessSvg {
}
