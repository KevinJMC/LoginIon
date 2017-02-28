import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

	public jsonp:any;
    data: any;

  constructor(jsonp: Jsonp, public http: Http) {
    this.jsonp = jsonp;
  }

  load(name:String, password:String) {
    if (this.data) {
        return Promise.resolve(this.data);
    }
    
      let params = new URLSearchParams('callback=JSONP_CALLBACK');
      params.set('term', keyword);
      return this.jsonp.request('localhost:8080/send', {
        search: params
      }).toPromise()
        .then((response) => response.json().results);
  }
}
