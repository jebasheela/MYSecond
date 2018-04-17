import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pagam-sidebar",
  templateUrl: "./pagam-sidebar.component.html",
  styleUrls: ["./pagam-sidebar.component.css"]
})

export class PagamSidebarComponent implements OnInit {
  transaction = {amount: 1 ,storename: 'Insegna-FakeMerchant', ordercode: 'testindhu'}

  constructor() { 

  }

  ngOnInit() {

  }
}
