import { Component, OnInit } from '@angular/core';
import {SliderService} from "../../../services/slider.service";
import {Slider} from "../../../DTOs/Sliders/Slider";
import {DomainName} from "../../../Utilities/PathTools";

declare  function homeSlider():any;

@Component({
  selector: 'app-index-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

public sliders:Slider[]=[];
public domainName:string=DomainName;

  constructor(private sliderService:SliderService) { }

  ngOnInit(): void {
    this.sliderService.getCurrentSliders().subscribe(sliders=>{
      if(sliders.length===0 ){
           this.sliderService.GetSlider().subscribe(res=>{
                if(res.status=="Success"){
                  this.sliderService.setCurrentSlider(res.data)
                }
      })
      }else{
        this.sliders=sliders
        console.log(sliders)
        setInterval(()=>{
          homeSlider();
        },100)

      }

    });
}
}
