import { Component, OnInit } from '@angular/core';
import {OffersCredit} from "../../Entities/offers-credit";
import {OffersCreditService} from "../../OfferService/offers-credit.service";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  listOffers:any;
  form : boolean = false;
  offers_credit!: OffersCredit;
  input:any;
  liststat: any;
  statistics: any;
  items = [ /* tableau des données de la table */ ];
  page = 1; // afficher la première page
  constructor(private offerService: OffersCreditService) { }

  ngOnInit(): void {
    this.getOffer();;
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
  getOffer(){
    this.offerService.getOffer().subscribe(res=>this.listOffers=res)
  }

  deleteOffer(id:any){
    this.offerService.deleteOffer(id).subscribe(()=>this.getOffer())
  }

  Onsubmint(id:any) {
    this.offerService.offerStatics(id).subscribe(res=> this.statistics = res)
  }



}
