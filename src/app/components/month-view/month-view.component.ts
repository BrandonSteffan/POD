import { Component } from '@angular/core';
import { Picture } from 'src/app/types/picture';
import { PictureDataService } from 'src/app/services/picture-data.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent {
  
  constructor(private service:PictureDataService){}

  pictures?: Picture[];
  startDate?: string = "2023-10-01";
  endDate?: string = "2023-10-05";

  ngOnInit(){
    // this.service.getPictures().subscribe(response => this.pictures = response);
    this.getByDate();
  }

  getByDate(){
    if(this.startDate && this.endDate)
    this.service.getPicturesByStart(this.startDate, this.endDate).subscribe(response => this.pictures = response);
  }
}
