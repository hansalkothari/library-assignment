import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/interface/book';
import { BooksService } from 'src/app/services/books.service';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';
import { MatSort, Sort } from '@angular/material/sort';
import { NavigationEnd, Router } from '@angular/router';

import {AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css'],
})

export class ArchivesComponent implements AfterViewInit {
  books: Book[];
  selectedGenre: string;
  fiction: Boolean | null;
  nonfiction: Boolean | null;
  archivedData: Book[] = [];
  displayedColumns: string[] = ['name','author','genre','rating','price','favorite','archive'];
  dataSource : MatTableDataSource<Book> ;

  constructor(private bookService: BooksService, private matDialog: MatDialog, private router : Router, private _liveAnnouncer : LiveAnnouncer) {
    this.books = this.bookService.getBooks;
    this.selectedGenre = this.bookService.selectedGenre;
    this.fiction = this.bookService.fiction;
    this.nonfiction = this.bookService.nonfiction;
    
    // either show archived or favorite books
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        if(event.urlAfterRedirects ==='/home/archives'){
          this.bookService.fav = false;
        }
        else if(event.urlAfterRedirects === '/home/favorites'){
          this.bookService.fav = true;
        }
      }
      if(this.bookService.fav){
        this.archivedData = this.books.filter(element => (element.favorite && !element.archive))
        this.dataSource = new MatTableDataSource(this.archivedData)
      }
      else{
        this.archivedData = this.books.filter(element => element.archive)
        this.dataSource = new MatTableDataSource(this.archivedData)
      }
    })
    
    this.dataSource = new MatTableDataSource(this.archivedData)
    
  }

  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addToFavorites(i: number) {
    this.books[i].favorite = !this.books[i].favorite;
  }

  addToArchives(i: number) {
    this.books[i].archive = !this.books[i].archive;
  }

  openDialog(book: Book) {
    const dialogRef = this.matDialog.open(BookdialogComponent, {
      width: '400px',
      data: book,
    });
  }

  archiveData(element : Book){
    element.archive = !element.archive;
    if (!this.bookService.fav) {
      this.archivedData = this.books.filter((element) => element.archive);
    }
    else if(this.bookService.fav){
      this.archivedData = this.books.filter(element => element.favorite)
    }
    this.dataSource = new MatTableDataSource(this.archivedData)
    
  }
}
