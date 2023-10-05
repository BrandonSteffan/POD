import { Component , Input } from '@angular/core';
import { Picture } from 'src/app/types/picture';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent {
  @Input() picture?: Picture;
}
