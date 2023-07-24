import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Book } from 'src/app/interface/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})

export class ConfirmdialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmdialogComponent>){}
  onClose(){
    this.dialogRef.close(0)
  }
  onConfirm(){
    this.dialogRef.close(1)
  }
}
