import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './services/data.service';
import { Result } from './models/result';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ImageSliderComponent implements OnInit {
  sliderImages: any[] = [];
  transform = 100;
  selectedIndex = 0;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getData().subscribe((result: Result) => {
      this.sliderImages = result.sliderArray;
    });
  }

  selected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x: number) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i: number) {
    this.transform = 100 - i * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }
}
