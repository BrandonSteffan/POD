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
    const apiKey = "api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7"

    const url = picUrl +"?"+ "date="+date  +"&"+apiKey;

    return this.client.get<Picture>(url);
  }

  getPictures():Observable<Picture[]>{
    const url= "https://api.nasa.gov/planetary/apod?start_date=2023-09-01&end_date=2023-09-30&api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7";
    return this.client.get<Picture[]>(url);
  }

  getPicturesByStart(startDate:string, endDate:string):Observable<Picture[]>{
    const picUrl = "https://api.nasa.gov/planetary/apod?";
    const datebaseS = "start_date=";
    const datebaseE = "end_date="
    const apiKey = "api_key=rXXV4rb59A2CTgI46wwmc5PbVqFQM44DMlWrKRK7"
    const url= picUrl + datebaseS + startDate+"&"+datebaseE+endDate + "&"+apiKey;
    return this.client.get<Picture[]>(url);
  }
}
