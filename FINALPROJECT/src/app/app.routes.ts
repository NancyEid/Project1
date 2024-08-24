import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'about', component: AboutComponent},
    {path:'services', component: ServicesComponent},
    {path:'contact', component: ContactComponent},
    {path:'**', component: PagenotfoundComponent},
];
