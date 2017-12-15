import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpService } from '../../../http.service';
import { ViewService } from '../../view.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
 // providers: [ViewService]
})
export class DocumentComponent implements OnInit {
  @Input() name:string;
  @Input() pnr:string;
  @Input() kst:string;
  viewEntry:{name:string,pnr:string,kst:string,unid:string};
   constructor(private viewService: ViewService,private httpService: HttpService, private router: Router,private route : ActivatedRoute) { }   
 
  ngOnInit() {
    // const docid = {id:this.route.snapshot.params['unid']};
    const docid : string = this.route.snapshot.params['unid'];
     this.viewEntry=this.viewService.getViewDocument(docid);
  //   this.httpService.getDoc(docid).subscribe(
   //    (response:Response)=>{
    //     const docValues = response.json();
    //   },
     //  (error)=> console.log(error)
    // )
  }
   

onSubmit(form: NgForm ){
   console.log(form.value.name,form.value.pnr, form.value.kst,this.viewEntry.unid );
  const viewDoc = {name:form.value.name,pnr:form.value.pnr,kst:form.value.kst,unid:this.viewEntry.unid};
  this.httpService.setData(viewDoc).subscribe(
    (response:Response)=>console.log(response),
    (error)=>console.log(error)
  );
}
loadView() {    
    this.router.navigate(['view']);
}
}
