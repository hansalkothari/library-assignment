import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/interface/book';
import { MatDialog } from '@angular/material/dialog';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements AfterViewInit {
  books: Book[];
  selectedGenre: string;
  fiction: Boolean | null;
  nonfiction: Boolean | null;
  genreBooks: Book[] = [];
  displayedColumns: string[] = ['name','author','genre','rating','price','favorite','archive'];
  dataSource : MatTableDataSource<Book>;
  
  constructor(private bookService : BooksService, private matDialog :MatDialog, private _liveAnnouncer: LiveAnnouncer){
    this.books = this.bookService.getBooks
    this.selectedGenre = this.bookService.selectedGenre
    this.fiction = this.bookService.fiction;
    this.nonfiction = this.bookService.nonfiction;
    this.genreBooks = this.bookService.books.filter(book => (book.genre == this.selectedGenre && !book.archive))
    this.dataSource = new MatTableDataSource(this.genreBooks)
  }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addToFavorites(book : Book){
      // this.books[i].favorite = !this.books[i].favorite;
      book.favorite = !book.favorite
  }

  addToArchives(element : Book){
    // 1. open dialog box
    const dialogRef = this.matDialog.open(ConfirmdialogComponent, {
      width: '250px',
    });
    // 2. ask for confirmation.
    // 3. if response is true then only do the below things, else do nothing
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        element.archive = !element.archive;
        this.genreBooks = this.books.filter(
          (item) => !item.archive && item.genre == this.selectedGenre
        );
        this.dataSource = new MatTableDataSource(this.genreBooks);
        this.lth('name');
      }
    });

    
  }
  
  //sorting low to high
  lth(key:string){
    if(key == 'price' )
      this.books.sort( (a :Book, b:Book) => (a['price'] > b['price'] ? 1 : -1));
    if(key == 'rating' )
      this.books.sort( (a :Book, b:Book) => (a['rating'] > b['rating'] ? 1 : -1));
    if(key == 'name' )
      this.books.sort( (a :Book, b:Book) => (a['name'] > b['name'] ? 1 : -1));
    if(key == 'author' )
      this.books.sort( (a :Book, b:Book) => (a['author'] > b['author'] ? 1 : -1));
    if(key == 'genre' )
      this.books.sort( (a :Book, b:Book) => (a['genre'] > b['genre'] ? 1 : -1));
    
  }
  //sorting high to low
  htl(key:string){
    if(key == 'price' )
      this.books.sort( (a :Book, b:Book) => (a['price'] < b['price'] ? 1 : -1));
    if(key == 'rating' )
      this.books.sort( (a :Book, b:Book) => (a['rating'] < b['rating'] ? 1 : -1));
    if(key == 'name' )
      this.books.sort( (a :Book, b:Book) => (a['name'] < b['name'] ? 1 : -1));
    if(key == 'author' )
      this.books.sort( (a :Book, b:Book) => (a['author'] < b['author'] ? 1 : -1));
    if(key == 'genre' )
      this.books.sort( (a :Book, b:Book) => (a['genre'] < b['genre'] ? 1 : -1));
    
  }

  
  openDialog(book : Book){
     const date = new Date();
     book.lastopen = `${date.getHours()} ${date.getMinutes()}`
     console.log("date written")
     localStorage.setItem('persistentBooks',JSON.stringify(this.bookService.books))
      const dialogRef = this.matDialog.open(BookdialogComponent,{
      width:'400px',
      data:book,
    })
  }

  
}
