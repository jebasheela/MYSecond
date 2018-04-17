import { Component, OnInit } from "@angular/core";
//import { languages } from "./languages";
import { TranslateService } from '../translate';


@Component({
  selector: "pagam-header-component",
  templateUrl: "./pagam-header-component.component.html",
  styleUrls: ["./pagam-header-component.component.css"]
})

export class PagamHeaderComponentComponent implements OnInit {
  public translatedText: string;
  public supportedLanguages: any[];
  //buyerdetails =[{id:1,language : 'Italy' },{id:2,language:'English'}]
  buyerdetails =[{language : 'Italy' },{language:'English'}]
  onChange(valuee){
    console.log(valuee);
}

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' },
      { display: '华语', value: 'zh' },
    ];
    
    this.selectLang('es');
      
  }
  
  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }
  
  selectLang(lang: string) {
    // set default;
    this._translate.use(lang);
    this.refreshText();
  }
  
  refreshText() {
    this.translatedText = this._translate.instant('hello world');
  }
}
