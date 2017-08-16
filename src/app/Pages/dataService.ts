import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

 // headers: Headers;

  fetchData() {
    return this.http.get('https://restapi.finkafe.com/FinkafeRest1/webresources/auth/showcase').map(x => x.json());
  }
  
  postData(url,body,options) {
    return this.http.post(url, body, options )
    .map((response: Response) => {
      return response.json();
      
     }, 
    );
  }
  loginUser(body, options) { 
    return this.http.post('http://restapi.finkafe.com/FinkafeRest1/webresources/auth/login', body, options )
    .map((respose: Response) => { 
       respose.json(); 
       console.log(respose.json());
    },   
    ).catch((err) => {
    return Observable.throw(err);
  
    },
  );

  }
}
