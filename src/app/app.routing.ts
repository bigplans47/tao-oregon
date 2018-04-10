import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListOfTrailsComponent } from './list-of-trails/list-of-trails.component';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {

    path: 'auth',
    component: AuthComponent
  },
  {

    path: 'trails',
    component: SearchComponent
  },
  {
    path: 'trails/:id',
    component: TrailDetailComponent
  }


]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
