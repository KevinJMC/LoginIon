import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

  data: any;
  
  basicOptions:RequestOptionsArgs = {
  url: 'http://127.0.0.1:8080/login',
  search: null,
  headers: new Headers({'Content-Type':'application/json'}),
  };

  constructor(public http: Http) {
    
  }

  sendData (name:string, password:string) {
    this.http.post("login", JSON.stringify({"username":name,"password": password}), this.basicOptions).subscribe(res => {
      this.data = res.json();
      console.log(this.data);
    });
  }
}
