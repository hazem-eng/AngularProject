import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  readonly API_URL = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) {
  }

  getRequest() {
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/all`)
  }

  deleteRequest(id_req: any) {
    return this.httpClient.delete(`${this.API_URL}/SpringMVC/Request/delete/${id_req}`)
  }

  retrieveAllMatchings() {
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/AllMatching`)
  }

  matching(id_req:any) {
    return this.httpClient.post(`${this.API_URL}/SpringMVC/Request/mat/${id_req}`,id_req)
  }
  addRequest(request:any){
    return this.httpClient.post(`${this.API_URL}/SpringMVC/Request/add`,request)
  }

  finance(id_request:any){
    return this.httpClient.get(`${this.API_URL}/SpringMVC/Request/amortization/${id_request}`)
  }


}
