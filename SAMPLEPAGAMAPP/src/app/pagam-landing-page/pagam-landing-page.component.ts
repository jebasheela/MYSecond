import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: "pagam-landing-page",
  templateUrl: "./pagam-landing-page.component.html",
  styleUrls: ["./pagam-landing-page.component.css"]
})

export class PagamLandingPageComponent implements OnInit {
  paymentsList = [{paymetNme:'paypal',path:'assets/images/Alipay.png'},
{paymetNme:'amazon',path:'assets/images/Alipay.png'},
{paymetNme:'amazon',path:'assets/images/Alipay.png'},
{paymetNme:'amazon',path:'assets/images/amazonpay.png'},
{paymetNme:'amazon',path:'assets/images/amazonpay.png'}
]
  
PassMe(vals)
{
  alert(vals);
}
sendImgVale(vals)
{

}

  constructor() { 
    

  }

  ngOnInit() {

  }
}
