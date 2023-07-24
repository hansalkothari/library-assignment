import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
    
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    // {provide:UrlSerializer, useClass:CustomUrlSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
