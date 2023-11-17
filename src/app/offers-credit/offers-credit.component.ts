import {Component, OnInit,ViewChild} from '@angular/core';
import{OffersCredit} from "../Entities/offers-credit";
import {OffersCreditService} from "../OfferService/offers-credit.service";
import {ChartComponent} from "ng-apexcharts";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

@Component({
  selector: 'app-offers-credit',
  templateUrl: './offers-credit.component.html',
  styleUrls: ['./offers-credit.component.css']
})
export class OffersCreditComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  listOffers:any;
  form : boolean = false;
  offers_credit!: OffersCredit;
  input:any;
  liststat: any;
  statistics: any;



  constructor(private offerService: OffersCreditService) {
    this.chartOptions = {
      series: [ 0, 0, 0],
      chart: {
        type: "donut"
      },
      labels: ["Accepted", "Refused", "Pending"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

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
