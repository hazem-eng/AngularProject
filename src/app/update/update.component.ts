import { Component, OnInit } from '@angular/core';
import {OffersCredit} from "../Entities/offers-credit";
import {OffersCreditService} from "../OfferService/offers-credit.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  message:any;
  listOffers:any;
  form : boolean = false;
  offers_credit!: OffersCredit;
  constructor(private offerService: OffersCreditService) { }

  ngOnInit(): void {
    this.offers_credit ={
      id_offer:null,
      credit:null,
      max_amount:null,
      min_amount:null,
      interest_rate:null,
      date_creation:null,
      repayment_period:null,





    };
  }

  editOffer(offer:OffersCredit,id:any){
    this.offerService.editOffer(offer,id).subscribe();
  }

}
