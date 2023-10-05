import { Component } from '@angular/core';
import { Picture } from 'src/app/types/picture';
import { ActivatedRoute } from '@angular/router';
import { PictureDataService } from 'src/app/services/picture-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent {
  
  

  constructor(
    private route:ActivatedRoute,
    private service:PictureDataService,
    private sanitizer: DomSanitizer
  ){}
  date?= this.route.snapshot.paramMap.get("date");
  picture?: Picture;
  
  // url?= this.getSafeYoutubeUrl(this.picture.url); 

  ngOnInit(){
    if(this.date)
    this.service.getPictureByDay(this.date).subscribe(response => this.picture = response);
    // this.url = this.getSafeYoutubeUrl(this.picture.url);
  }
  // getSafeYoutubeUrl(videoId: string): SafeResourceUrl{
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(videoId);
  // }
}
