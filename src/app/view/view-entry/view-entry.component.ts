import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[app-view-entry]',
  templateUrl: './view-entry.component.html',
  //styleUrls: ['./view-entry.component.css']
 // encapsulation: ViewEncapsulation.None
})
export class ViewEntryComponent implements OnInit {
  @Input() vEntry:{name: string, pnr: string,kst:string,unid:string }; 
  @Input() index:number;  
  constructor() { }

  ngOnInit() {
  }

}
