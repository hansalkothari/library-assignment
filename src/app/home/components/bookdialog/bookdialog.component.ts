import { Component ,Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Book } from 'src/app/interface/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-bookdialog',
  templateUrl: './bookdialog.component.html',
  styleUrls: ['./bookdialog.component.css']
})
export class BookdialogComponent {
  constructor(private dialogRef: MatDialogRef<BookdialogComponent>,
    private bookservice: BooksService , @Inject(MAT_DIALOG_DATA) public book: Book){}
  
  onClick(){
    this.dialogRef.close()
  }
}
