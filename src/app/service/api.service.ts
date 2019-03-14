import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {
  }

  hkabGet() {
    let url = '//rbwm-api.hsbc.com.hk/pws-hk-hase-rates-papi-prod-proxy/v1/hibor-rates?date=' + +new Date();
    let ob = this.http.get(url);
    return ob;
  }

}