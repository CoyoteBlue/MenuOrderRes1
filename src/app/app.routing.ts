import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*import { AppComponent } from './app.component'*/
import { MenuComponent } from './menu/menu.component';

const APP_ROUTES: Routes = [
/*	{ path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: 'root', component: AppComponent },*/
  { path: 'menu', component: MenuComponent },
/*  { path: 'customer', component: CustomerComponent },
	{ path: 'portfolio', component: PortfolioComponent, children: FolioRoutes },
	{ path: '', component: HomeComponent }	*/
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = { MenuComponent}
