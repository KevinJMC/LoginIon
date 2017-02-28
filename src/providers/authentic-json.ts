import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

  data: any;
  url: string = "localhost:8080/send";

  constructor(public http: Http) {
    
  }

  sendData (name:String, password:String) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8080/send", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({"username":name,"password":password}));
    console.log(xhr.response);
    this.data = xhr.responseText;
      }
    }
