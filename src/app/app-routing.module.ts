import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './home/components/about/about.component';
import { BooksComponent } from './home/components/books/books.component';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LastviewComponent } from './home/components/lastview/lastview.component';
import { authguardGuard } from './components/login/authguard.guard';
import { loginguardGuard } from './home/loginguard.guard';
import { ArchivesComponent } from './home/components/archives/archives.component';
import { GenresComponent } from './home/components/genres/genres.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full' },
  {path:'signup',canActivate:[loginguardGuard], component: SignupComponent},
  {path: 'login',canActivate:[loginguardGuard], component: LoginComponent},
  {
    path:'home',component:HomeComponent,canActivate:[authguardGuard] ,children:[
      {path:'books',component:BooksComponent},
      {path:'about',component:AboutComponent},
      {path:'dashboard',component:DashboardComponent},
      
      {path:'lastten',component:LastviewComponent},
      {path:'lastone',component:LastviewComponent},
      {path:'lastfive',component:LastviewComponent},
      
      {path:'archives',component:ArchivesComponent},
      {path:'favorites',component:ArchivesComponent},
      {path:'genres',component:GenresComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
