import { Routes, RouterModule, RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';
import { MasterPageComponent } from './master-page.component';
import { AnonymousMasterPageComponent } from './anonymous-master-page.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//https://medium.com/@juliapassynkova/angular-2-component-reuse-strategy-9f3ddfab23f5

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
];

export const routing = RouterModule.forRoot([
  ...ROUTES
], { useHash: false });
