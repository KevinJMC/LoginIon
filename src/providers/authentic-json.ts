import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticJSON {

  data: any;
  var xhr = XMLHttpRequest();
  var url = "localhost:8080/send";

  constructor(public http: Http) {
    
  }

  sendData(name:String, password:String) {
    if (this.data) {
        return Promise.resolve(this.data);
    }
    data = JSON.stringify({"username":name,"password":password});
    
    xhr.open("POST", url, true);
    
    xhr.send(data);
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);
      }
    }
  }
}
