import { Component ,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Book } from 'src/app/interface/book';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { TimeScale } from 'chart.js/dist';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  newBook:any;
  fictionGenres: string[];
  
  
  constructor(public dialogRef : MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book, private bookservice :BooksService  ){
      this.fictionGenres = Object.keys(this.bookservice.fictionGenres)

      this.newBook = new FormGroup({
        name: new FormControl('',[Validators.required]),
        author:new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required ]),
        genre: new FormControl('',[Validators.required]),
        rating: new FormControl('',[Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$')]),
        timestamp:new FormControl(Date.now())
      })
      
  }
  
  onClick(){
    this.dialogRef.close()
  }

  submit(){
    console.log("inside form submission of add a book.")
    if(this.newBook.valid){
      console.log(this.newBook.value)
      // localStorage.setItem(`${this.newBook.value.name}~~${this.newBook.value.author}`.toLowerCase(),JSON.stringify(this.newBook.value))
      const date = new Date()

      const bk = {...this.newBook.value, favorite:false, archive:false, date:`${date.getDate()} ${date.getMonth()}`}
      this.bookservice.books.push(bk)
      localStorage.setItem('persistentBooks',JSON.stringify(this.bookservice.books))
      this.dialogRef.close()
    }
    
  }
  get name(){
    return this.newBook.get('name')
  }
  get author(){
    return this.newBook.get('author')
  }
  get genre(){
    return this.newBook.get('genre')
  }
  get price(){
    return this.newBook.get('price')
  }
  get rating(){
    return this.newBook.get('rating')
  }
  
  
}
