import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Book } from './interface/book';
import { BooksService } from './services/books.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'assignment';
  showNav:Boolean = true;
  shownav:Boolean = true;
  newObj :Book = {
    name: '',
    author: '',
    price: 0,
    rating: 0,
    genre: '',
    favorite: false,
    archive: false
  };
  
  constructor(private router : Router, private bookservice : BooksService, private user: UserService){
    let previousBooks = localStorage.getItem("persistentBooks")
    if(previousBooks !== null && previousBooks !== undefined){
      const items = JSON.parse(previousBooks)
      this.bookservice.books = items
    }

    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.showNav =!(event.urlAfterRedirects ==='/login')
        this.shownav =!(event.urlAfterRedirects ==='/signup')
      }
    })
    for (let key of Object.keys(localStorage)){
      var value = localStorage.getItem(key)
      if(key == "persistentBooks" || key == 'allUsers' || key=='currentUser')
        continue;
      if(value !== undefined && value !== null){
        const item = JSON.parse( value )
        this.newObj.name = item.name;
        this.newObj.author = item.author;
        this.newObj.genre = item.genre;
        this.newObj.price = item.price;
        this.newObj.rating = item.rating;
        this.newObj.timestamp = new Date(item.timestamp)
      }
      else{
        console.log("not valid book")
      }
      console.log(this.newObj)
      this.bookservice.books.push(this.newObj)
    }
    console.log(this.bookservice.books)

  }
  ngOnInit(): void {
    if(localStorage.getItem('currentUser')==null){
      this.router.navigate(['login'])
    }
  }
}
