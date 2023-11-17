import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {OffersCredit} from "../Entities/offers-credit";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OffersCreditService {
readonly API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getOffer(){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Offers_Credit/all`)
  }
  addOffer(offer_credit:any){
    return this.httpClient.post(`${this.API_URL}/SpringMVC/Offers_Credit/add`,offer_credit)
  }
  editOffer(offer:any,id:any){
    return this.httpClient.put(`${this.API_URL}/SpringMVC/Offers_Credit/update`+offer,id)
  }
  deleteOffer(id:any){
    return this.httpClient.delete(`${this.API_URL}/SpringMVC/Offers_Credit/delete/${id}`)
  }
  offerStatics(id_offer:any){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Offers_Credit/statistics/${id_offer}`)
  }

  getOffersCreditById(id_offer:any){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Offers_Credit/get/${id_offer}`)
  }

  Simulation(amount:any,repaymentPeriod:any){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Offers_Credit/${amount}/${repaymentPeriod}/offer`)
  }

  checkLoan(id_req :any){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/users/${id_req}/loans`)
  }



}
