import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

  data: any;
  url: string = "localhost:8080/send";

  constructor(public http: Http) {
    
  }

  sendData(name:String, password:String) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.url, true);
    
    if (this.data) {
        return Promise.resolve(this.data);
    }
    this.data = JSON.stringify({"username":name,"password":password});
    
    xhr.send(this.data);
    
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
      }
    }
  }
}
