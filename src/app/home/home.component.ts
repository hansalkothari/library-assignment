import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Book } from 'src/app/interface/book';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';
import { BookdialogComponent } from './components/bookdialog/bookdialog.component';
import { ConfirmdialogComponent } from './components/confirmdialog/confirmdialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fiction: Boolean;
  nonfiction: Boolean;
  username: string = '';
  email: string = '';

  fictionGenres: { [key: string]: boolean };
  nonfictionGenres: { [key: string]: boolean };
  selectedGenres: string;
  showAllBooks: Boolean = true;
  books: Book[];
  displayedColumns: string[] = [
    'name',
    'author',
    'genre',
    'rating',
    'price',
    'favorite',
    'archive',
  ];
  filteredData: Book[] = [];
  nameSort: Boolean = false;
  authorSort: Boolean = false;
  priceSort: Boolean = false;
  ratingSort: Boolean = false;
  genreSort: Boolean = false;

  ngOnInit(): void {}

  getObjectKeys(obj: { [key: string]: boolean }): string[] {
    return Object.keys(obj);
  }

  toggleValue(key: string, obj: { [key: string]: boolean }): void {
    obj[key] = !obj[key];
    console.log(obj);
  }
  constructor(
    private bookservice: BooksService,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService
  ) {
    this.fiction = this.bookservice.fiction;
    this.nonfiction = this.bookservice.nonfiction;
    this.selectedGenres = this.bookservice.selectedGenre;

    this.fictionGenres = this.bookservice.fictionGenres;
    this.nonfictionGenres = this.bookservice.nonfictionGenres;
    this.books = this.bookservice.books;

    if (localStorage.getItem('currentUser') != null) {
      const usr = localStorage.getItem('currentUser');
      if (usr != null && usr != undefined) {
        var user = JSON.parse(usr);
      }
      this.username = `${user.firstname} ${user.lastname}`;
      this.email = user.email;
    }

    //toggle showALlBooks after routing.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showAllBooks = !(event.urlAfterRedirects !== '/home');
      }
    });
    this.filteredData = this.books.filter((item) => !item.archive);
    this.lth('name');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '640px',
      height: '480px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log('the dialog Closed', res);
    });
  }

  lastten() {
    this.bookservice.selectedGenre = '';
    this.router.navigate(['/home/lastten']);
  }
  lastone() {
    this.bookservice.selectedGenre = '';
    this.router.navigate(['/home/lastone']);
  }
  lastfive() {
    this.bookservice.selectedGenre = '';
    this.router.navigate(['/home/lastfive']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
  
  addToFavorites(i: number) {
    this.books[i].favorite = !this.books[i].favorite;
  }
  
  //sorting low to high
  lth(key: string) {
    if (key == 'price') {
      this.books.sort((a: Book, b: Book) => (a['price'] < b['price'] ? -1 : 1));
      this.priceSort = !this.priceSort;
    }
    if (key == 'rating') {
      this.books.sort((a: Book, b: Book) =>
        a['rating'] < b['rating'] ? -1 : 1
      );
      this.ratingSort = !this.ratingSort;
    }
    if (key == 'name') {
      this.books.sort((a: Book, b: Book) => (a['name'] < b['name'] ? -1 : 1));
      this.nameSort = !this.nameSort;
    }
    if (key == 'author') {
      this.books.sort((a: Book, b: Book) =>
        a['author'] < b['author'] ? -1 : 1
      );
      this.authorSort = !this.authorSort;
    }
    if (key == 'genre') {
      this.books.sort((a: Book, b: Book) => (a['genre'] < b['genre'] ? -1 : 1));
      this.genreSort = !this.genreSort;
    }
    this.filteredData = this.filteredData = this.books.filter(
      (item) => !item.archive
    );
  }
  //sorting high to low
  htl(key: string) {
    if (key == 'price') {
      this.books.sort((a: Book, b: Book) => (a['price'] < b['price'] ? 1 : -1));
      this.priceSort = !this.priceSort;
    }
    if (key == 'rating') {
      this.books.sort((a: Book, b: Book) =>
        a['rating'] < b['rating'] ? 1 : -1
      );
      this.ratingSort = !this.ratingSort;
    }
    if (key == 'name') {
      this.books.sort((a: Book, b: Book) => (a['name'] < b['name'] ? 1 : -1));
      this.nameSort = !this.nameSort;
    }
    if (key == 'author') {
      this.books.sort((a: Book, b: Book) =>
        a['author'] < b['author'] ? 1 : -1
      );
      this.authorSort = !this.authorSort;
    }
    if (key == 'genre') {
      this.books.sort((a: Book, b: Book) => (a['genre'] < b['genre'] ? 1 : -1));
      this.genreSort = !this.genreSort;
    }
    this.filteredData = this.books.filter((item) => !item.archive);
    console.log(this.filteredData);
  }

  openBookDialog(book: Book) {
    const date = new Date();
    book.lastopen = `${date.getHours()} ${date.getMinutes()}`;
    console.log('date written');
    localStorage.setItem(
      'persistentBooks',
      JSON.stringify(this.bookservice.books)
    );
    const dialogRef = this.dialog.open(BookdialogComponent, {
      width: '400px',
      data: book,
    });
  }
  
  filterData(element: Book) {
    // 1. open dialog box
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '250px',
    });
    // 2. ask for confirmation.
    // 3. if response is true then only do the below things, else do nothing
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        element.archive = !element.archive;
        this.filteredData = this.books.filter((item) => !item.archive);
        this.lth('name');
      }
    });
  }
}


