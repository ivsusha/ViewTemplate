import { Http, Headers, Response } from '@angular/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

 @Injectable()
export class HttpService {
  
   constructor(private http: Http){}
   getViewData(){ 
      
      const headers = new Headers([{'Access-Control-Allow-Origin': '*'},
      {'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'},
    {'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}]);
       return this.http.get('http://localhost/mbs_maruf.nsf/main.xsp?view=name',{headers:headers})
   }
   setData(docValues:{name:string,pnr:string,kst:string,unid:string}){
     
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    console.log(JSON.stringify(docValues));
       let jstr =JSON.stringify(docValues);
   //const jstr={name:"Abu Baker Muhanad",pnr:"1323469",kst:"00C020A",unid:"14A769B964FEF78C422581B50047FA4C"};
     return this.http.post('http://localhost/mbs_maruf.nsf/main.xsp?view=save',jstr,{headers:headers})
    .map((resp:Response)=>{resp.statusText })      
     .catch((error:any) =>{return Observable.throw(error);}); 
   }
   getDoc(unid:string){
    return this.http.get('http://localhost/mbs_maruf.nsf/main.xsp?view=doc&unid=unid')
   }
}