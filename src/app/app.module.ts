import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ViewEntryComponent } from './view/view-entry/view-entry.component';
import { DocumentComponent } from './view/view-entry/document/document.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HttpService} from './http.service';
const appRouters: Routes=[
  {path: '',component: HomeComponent},  
  {path: 'mbs_maruf.nsf',component: HomeComponent}, 
  {path: 'home',component: HomeComponent},
  {path: 'view',component: ViewComponent},
  {path: 'doc/:unid',component: DocumentComponent},
  {path: 'doc',component: DocumentComponent},
  {path: 'doc/:unid',component: DocumentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ViewEntryComponent,
    DocumentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
