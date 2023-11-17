import { Component, OnInit } from '@angular/core';
import {OffersCreditService} from "../../OfferService/offers-credit.service";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loan:any;

  constructor(private offerService: OffersCreditService) { }

  ngOnInit(): void {
  }

  check(id_request:any) {

    this.offerService.checkLoan(id_request).subscribe(res => this.loan = res)

  }

}
