import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {HomeSliderResponse} from "../DTOs/Sliders/HomeSliderResponse";

import {Slider} from "../DTOs/Sliders/Slider";


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private homeSliders:BehaviorSubject<Slider[]>=new BehaviorSubject<Slider[]>([]);

  constructor(private http:HttpClient) { }


  public GetSlider():Observable<HomeSliderResponse>{
   return  this.http.get<HomeSliderResponse>("/Slider/GetActiveSlider")
  }

  public getCurrentSliders():Observable<Slider[]>{
    return this.homeSliders;
  }

  public setCurrentSlider(sliders:Slider[]){
    this.homeSliders.next(sliders);
  }


}
