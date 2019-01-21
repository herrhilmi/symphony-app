import {RouterModule, Routes} from '@angular/router'; 
import {ControllerComponent} from './controller/controller.component';
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'controller', component: ControllerComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTES = RouterModule.forRoot(ROUTES);