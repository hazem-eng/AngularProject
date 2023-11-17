import { Component, OnInit } from '@angular/core';
import {OffersCreditService} from "../../OfferService/offers-credit.service";
import {OffersCredit} from "../../Entities/offers-credit";

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {
  offers_credit!: OffersCredit;
  listOffers:any;
  amount: any;
  repayment: any;
  public matchingOffers: OffersCredit[] = [];


  constructor(private offerService: OffersCreditService) { }

  ngOnInit(): void {


  }
   findMatchingOffer(){
    this.offerService.Simulation(this.amount, this.repayment)
      .subscribe(res=> this.listOffers = res);
  }

}
