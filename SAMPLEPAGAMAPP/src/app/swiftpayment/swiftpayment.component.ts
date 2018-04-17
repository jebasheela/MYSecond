import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'swiftpayment',
    templateUrl: 'swiftpayment.component.html',
    styleUrls: ['swiftpayment.component.css']
})
export class SwiftpaymentComponent {

    cardHolder = { buyername : 'Gurubhai', cardnumber : '444444444448888' };
    onClick(vals)
    {
            alert(vals);
    }
}
