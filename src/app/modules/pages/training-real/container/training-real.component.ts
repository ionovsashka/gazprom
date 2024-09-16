import { Component } from '@angular/core';
import { VideoComponent } from "../../../common/shared/components/svg/video/video.component";
import { ChevronRightComponent } from "../../../common/shared/components/svg/chevron-right/chevron-right.component";
import { DocumentsComponent } from "../../../common/shared/components/svg/documents/documents.component";

@Component({
  selector: 'app-training-real',
  standalone: true,
  imports: [
    ChevronRightComponent,
    DocumentsComponent,
    VideoComponent,
  ],
  templateUrl: './training-real.component.html',
  styleUrl: './training-real.component.scss'
})
export class TrainingRealComponent {

}
