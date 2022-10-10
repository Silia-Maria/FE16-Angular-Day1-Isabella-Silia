import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  name1: string = "Seychelles";
  price1: string = "1.890";
  nights1: number = 7;
  city1: string = "Island Praslin";
  
  name2: string = "USA";
  price2: string = "2.199";
  nights2: number = 5;
  city2: string = "Las Vegas";

  name3: string = "South Africa";
  price3: string = "1.550";
  nights3: number = 7;
  city3: string = "Cape Town";

  name4: string = "Greece";
  price4: string = "1.299";
  nights4: number = 6;
  city4: string = "Island Santorini";

  name5: string = "French Polynesia";
  price5: string = "2.499";
  nights5: number = 4;
  city5: string = "Island Bora-Bora";

  name6: string = "Australia";
  price6: string = "2.380";
  nights6: number = 6;
  city6: string = "Sydney";


  constructor() { }

  ngOnInit(): void {
  }

}
