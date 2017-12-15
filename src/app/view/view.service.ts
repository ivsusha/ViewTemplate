import { Injectable } from "@angular/core";

@Injectable()
export class ViewService {
     viewEntryArray : {name:string,pnr:string,kst:string,unid:string}[]=[] ;
   //  {name:'Ivan Susha1',pnr:'1234567',kst:'0A100'},
  //   {name:'Ivan Susha2',pnr:'7654321',kst:'0A200'},
  //   {name:'Ivan Susha3',pnr:'8854321',kst:'0A300'},
  //   {name:'Ivan Susha4',pnr:'8054321',kst:'0A420'}

addEntry(name: string, pnr: string, kst: string,unid:string){
    this.viewEntryArray.push({name: name, pnr: pnr, kst: kst,unid :unid});
}
setViewDocuments(viewArray: {name:string,pnr:string,kst:string,unid:string}[]){
  this.viewEntryArray = viewArray;
}
getViewDocument(unid:string){
 
   return this.viewEntryArray.find(x => x.unid==unid);
}

}