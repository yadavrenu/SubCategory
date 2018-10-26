import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ApiCallsService } from './api-calls.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ElectronicsComponent
      }
      ])
  ],
  providers: [ApiCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
