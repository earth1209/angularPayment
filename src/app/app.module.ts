import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { Page1Component } from './layout/page1/page1.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { PaymentComponent } from './layout/payment/payment.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    LayoutComponent,
    Page1Component,
    DashboardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
