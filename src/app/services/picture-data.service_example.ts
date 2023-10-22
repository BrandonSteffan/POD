import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Picture } from '../types/picture';

@Injectable({
  providedIn: 'root'
})
export class PictureDataService {

  constructor(private client:HttpClient) { }

  getPictureByDay(date:string):Observable<Picture>{
    const picUrl = "https://api.nasa.gov/planetary/apod";
    // Insert your api key here 
    const apiKey = ""

    const url = picUrl +"?"+ "date="+date  +"&"+apiKey;

    return this.client.get<Picture>(url);
  }


  getPicturesByStart(startDate:string, endDate:string):Observable<Picture[]>{
    const picUrl = "https://api.nasa.gov/planetary/apod?";
    const datebaseS = "start_date=";
    const datebaseE = "end_date="
    // Insert your api key here
    const apiKey = ""
    const url= picUrl + datebaseS + startDate+"&"+datebaseE+endDate + "&"+apiKey;
    return this.client.get<Picture[]>(url);
  }
}
