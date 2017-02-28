import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

  data: any;

  constructor(public http: Http) {
  
  }

  load(name:String, password:String) {
    if (this.data) {
        return Promise.resolve(this.data);
    }
      let params = new URLSearchParams('callback=JSONP_CALLBACK');
      params.set('term', keyword);
      return this.jsonp.request('localhost:4200/send', {
        search: params
      }).toPromise()
        .then((response) => response.json().results);
  }
}
