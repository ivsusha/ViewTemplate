import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import {ViewService} from './view.service';
import {Http,Response} from '@angular/http'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
 // providers: [ViewService]
})
export class ViewComponent implements OnInit {
  viewEntryArray : {name:string, pnr:string,kst:string,unid:string}[]=[];
 
 // viewEntryArray =[{name:"Ivan Susha1",pnr:"1234567",kst:"0A100"},
 //{name:"Ivan Susha2",pnr:"7654321",kst:"0A200"},
//{name:"Ivan Susha3",pnr:"8854321",kst:"0A300"}];

  constructor( private viewService:ViewService,private httpService: HttpService) { }
 
  ngOnInit() {
   // this.viewEntryArray = this.viewService.viewEntryArray; 
   this.httpService.getViewData().
   subscribe(
       (response:Response)=> {
         const viewArray:{name:string, pnr:string,kst:string,unid:string}[] = response.json();
   //      this.viewEntryArray = this.getView(viewArray);
        this.viewEntryArray = viewArray;
        this.viewService.setViewDocuments( this.viewEntryArray);
    },
     (error)=>console.log(error)
   )
  }


   
}
