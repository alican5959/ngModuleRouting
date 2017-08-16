import {Injectable} from "@angular/core";
import {Http,Response,RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class FetchService{

    constructor(private http:Http){}

    fetchData(url,options?){
      return this.http.get(url,options) .map((x)=>  x.json() ) ;

    }

    postData(url,body,options) {
      console.log
    return this.http.post(url, body, options )
    .map((response: Response) => {
      return response.json(); }, 
    );
   
  }
    putData(url,body,options){
   
     return this.http.put(url,body,options).map((response:Response)=> {
        return response.json();
      })
    }
}

