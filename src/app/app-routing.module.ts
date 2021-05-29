import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { Page1Component } from './layout/page1/page1.component';
import { PaymentComponent } from './layout/payment/payment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'login', // child route path
        component: LoginComponent, // child route component that the router renders
      },
      {
        path: '',
        component: LayoutComponent, // another child route component that the router renders
        children: [
         
          {
          path:'dashboard',
          component:DashboardComponent
          },
          {
            path :'payment',
            component:PaymentComponent
          }
        ],
      },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
