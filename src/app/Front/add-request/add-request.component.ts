import { Component, OnInit } from '@angular/core';
import {Request} from "../../Entities/request";
import {RequestService} from "../../reqService/request.service";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  message:any;
  request!: Request;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.request={
      id_request:null,
      request_date:null,
      amount_req:null,
      description:null,
      gender:null,
      monthly_pay:null,
      term_loan:null,
      start_repayment:null,

    }
  }
  addRequest(request:any){
    this.requestService.addRequest(request).subscribe(() => {
      this.requestService.getRequest();
    });
  }}
