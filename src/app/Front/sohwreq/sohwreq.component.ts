import { Component, OnInit } from '@angular/core';
import {OffersCreditService} from "../../OfferService/offers-credit.service";
import {RequestService} from "../../reqService/request.service";

@Component({
  selector: 'app-sohwreq',
  templateUrl: './sohwreq.component.html',
  styleUrls: ['./sohwreq.component.css']
})
export class SohwreqComponent implements OnInit {

  listRequests:any;
  form : boolean = false;
  request!: Request;
  loan:any;
  finance:any;
  showModal = false;
  checkResult = '';
  showResultButton = true;
  showReportButton = true;










  constructor(private requestService:RequestService,private offerService: OffersCreditService ) { }

  ngOnInit(): void {
    this.getRequest();;

  }
  getRequest(){
    this.requestService.getRequest().subscribe(res=>this.listRequests=res)
  }
  check(id_request:any) {

      this.offerService.checkLoan(id_request).subscribe(res => this.loan = res)
    this.showResultButton = true;
    this.showReportButton = false;

  }


  financeRapport(id_request:any){
    this.requestService.finance(id_request).subscribe(res=> this.finance = res)
    this.showResultButton = false;
    this.showReportButton = true;

  }

  downloadTable(finance: any[]) {
    const csvRows = [];
    const headers = ['Year', 'Capital Remaining', 'Principal', 'Interest', 'Annuity'];
    csvRows.push(headers.join(','));

    finance.forEach(f => {
      const values = [f.year, f.capitalRemaining, f.principal, f.interest, f.annuity];
      csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'amortization-table.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  closeModal(): void {
    this.showModal = false;
  }



}
