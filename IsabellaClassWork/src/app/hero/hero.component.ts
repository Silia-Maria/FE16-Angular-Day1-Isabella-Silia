import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string = "Welcome to Travel Agency";
  heroText: string = "We are the most confortable way to travel around the world!";
  heroBtnText: string = "More Infos";
  heroBtnUrl: string = ".\about-us";

  constructor() { }

  ngOnInit(): void {
  }

}
