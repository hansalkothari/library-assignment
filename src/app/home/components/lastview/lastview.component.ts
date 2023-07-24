import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/interface/book';
import { BooksService } from 'src/app/services/books.service';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-lastview',
  templateUrl: './lastview.component.html',
  styleUrls: ['./lastview.component.css'],
})
export class LastviewComponent {
  books: Book[];
  filteredData: Book[] = [];
  displayedColumns: string[] = ['name','author','genre','rating','price','favorite','archive'];
  
  lastone : Boolean = false;
  lastten : Boolean = false;
  lastfive : Boolean = false;
  
  constructor(private bookservice: BooksService, private matDialog: MatDialog,private router: Router) {
    this.books = this.bookservice.books;
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        if(event.urlAfterRedirects === '/home/lastten'){
          this.lastten = true;
          this.lastfive = this.lastone = false;
        }
        else if (event.urlAfterRedirects === '/home/lastone'){
          this.lastone = true;
          this.lastten = this.lastfive = false;
        }
        else if (event.urlAfterRedirects === '/home/lastfive'){
          this.lastfive = true;
          this.lastten = this.lastone = false;
        }
      }
      if(this.lastten){
        this.filteredData = this.books.filter(item => this.lasttencheck(item))
      }
      else if(this.lastone){
        this.filteredData = this.books.filter(item => (this.lasttencheck(item) && this.lastonecheck(item)))
      }
      else if(this.lastfive){
        this.filteredData = this.books.filter(item => (this.lasttencheck(item) &&this.lastfivecheck(item)))
      }
    })
    this.lth('name')
    
  }

  addToFavorites(i: number) {
    this.books[i].favorite = !this.books[i].favorite;
  }
  addToArchives(i: number) {
    this.books[i].archive = !this.books[i].archive;
  }
  lth(key: string) {
    if (key == 'price')
      this.books.sort((a: Book, b: Book) => (a['price'] > b['price'] ? 1 : -1));
    if (key == 'rating')
      this.books.sort((a: Book, b: Book) =>
        a['rating'] > b['rating'] ? 1 : -1
      );
    if (key == 'name')
      this.books.sort((a: Book, b: Book) => (a['name'] > b['name'] ? 1 : -1));
    if (key == 'author')
      this.books.sort((a: Book, b: Book) =>
        a['author'] > b['author'] ? 1 : -1
      );
    if (key == 'genre')
      this.books.sort((a: Book, b: Book) => (a['genre'] > b['genre'] ? 1 : -1));
  }
  //sorting high to low
  htl(key: string) {
    if (key == 'price')
      this.books.sort((a: Book, b: Book) => (a['price'] < b['price'] ? 1 : -1));
    if (key == 'rating')
      this.books.sort((a: Book, b: Book) =>
        a['rating'] < b['rating'] ? 1 : -1
      );
    if (key == 'name')
      this.books.sort((a: Book, b: Book) => (a['name'] < b['name'] ? 1 : -1));
    if (key == 'author')
      this.books.sort((a: Book, b: Book) =>
        a['author'] < b['author'] ? 1 : -1
      );
    if (key == 'genre')
      this.books.sort((a: Book, b: Book) => (a['genre'] < b['genre'] ? 1 : -1));
  }

  lasttencheck(book: Book): Boolean {
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const str = book?.lastopen;
    console.log(str);
    if (str != undefined) {
      if (
        hour == Number(str?.split(' ')[0]) &&
        mins - Number(str?.split(' ')[1]) <= 10
      )
        return true;
        else if (
          hour == Number(str?.split(' ')[0]) + 1 &&
          (Number(str?.split(' ')[1]) + 10) % 60 <= mins
        )
        return true;
    }
    return false;
  }
  lastonecheck(book : Book): Boolean{
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const str = book?.lastopen;
    console.log(str);
    if (str != undefined) {
      if (hour > Number(str?.split(' ')[0])){
        if(mins > Number(str?.split(' ')[0]))
          return false;
        else 
          return true;
      }
    }
    return true;
  }
  lastfivecheck(book : Book):Boolean{
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const str = book?.lastopen;
    console.log(str);
    if (str != undefined) {
      if ((hour-5) >= Number(str?.split(' ')[0])){
        if(mins > Number(str?.split(' ')[0]))
          return false;
        else
          true;
      }
    }
    return true;
  }

  openDialog(book: Book) {
    const dialogRef = this.matDialog.open(BookdialogComponent, {
      width: '400px',
      data: book,
    });
  }
  archiveData(element : Book){
    element.archive = !element.archive;
    this.filteredData = this.books.filter(element => element.archive)
    this.lth('name')
  }
}
