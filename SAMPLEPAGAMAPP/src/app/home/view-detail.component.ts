import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
    selector: 'view-detail-app',
    templateUrl: './view-detail.component.html',
	styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit { 

	constructor() { }
    ngOnInit(): void {
    
    }
    
}
    