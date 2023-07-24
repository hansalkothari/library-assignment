import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';

import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BookdialogComponent } from './components/bookdialog/bookdialog.component';
import { LastviewComponent } from './components/lastview/lastview.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { GenresComponent } from './components/genres/genres.component';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';

@NgModule({
  declarations: [
   
    AboutComponent,
    BooksComponent,
    DashboardComponent,
    DialogComponent,
    BookdialogComponent,
    LastviewComponent,
    ArchivesComponent,
    GenresComponent,
    ConfirmdialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    RouterModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    MatSortModule
  ]
})
export class HomeModule { }
