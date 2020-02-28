import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
