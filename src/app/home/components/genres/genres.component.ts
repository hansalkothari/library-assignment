import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/interface/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent {
  selectedGenres: string;
  fiction: Boolean;
  fictionGenres: { [key: string]: boolean };
  books: Book[];
  nonfiction: Boolean;
  nonfictionGenres: { [key: string]: boolean };
  imageSrcs:{ [key: string]: string } = {
    Action:"https://img.favpng.com/2/22/5/computer-icons-action-film-vector-graphics-download-png-favpng-tnWMrm6zAViukiKmeemFdS6MF.jpg",
    Adventure:"https://img.favpng.com/1/1/8/computer-icons-adventure-film-film-genre-png-favpng-kq8GBsRZUEUge9X5pgcxjERCP.jpg",
    Crime:"https://img.favpng.com/10/19/16/crime-computer-icons-png-favpng-DrAvaLJNDMdbqW3KZxSzSjxXg.jpg",
    Dystopian:"https://img.favpng.com/6/23/17/building-dystopia-science-fiction-space-ranger-jotnar-protocol-png-favpng-97DfbH78qUb1urnXJhdvqmyZe_t.jpg",
    Fantasy:"https://img.favpng.com/4/12/19/computer-icons-fantasy-symbol-png-favpng-MnEeSpqaibdghSeKjuuuD3wUF.jpg",
    Historical:"https://img.favpng.com/10/17/17/computer-icons-icon-design-history-png-favpng-Mc1BFE7wF5RyuzX3eg0rfrGEk.jpg",
    Horror:"https://img.favpng.com/9/10/18/ghostface-horror-icon-film-illustration-png-favpng-gj3W0bk39HaDfJeJjY7Zw3UJW.jpg",
    Mystery:"https://img.favpng.com/24/15/8/waiting-on-a-mystery-logo-interpersonal-relationship-love-consciousness-png-favpng-KwWetzFf9NcKfhkHzh2kUChbD.jpg",
    Romance:"https://img.favpng.com/24/8/1/romance-couple-silhouette-clip-art-png-favpng-sDSkt7VxPSpvm1fXAq94QRNhV_t.jpg",
    Sciencefiction:"https://img.favpng.com/16/1/21/black-science-fiction-computer-icons-clip-art-png-favpng-f64PRYH7KT0jPpiwJbfrdtJFN.jpg",
    Western:"https://img.favpng.com/20/9/23/paramount-pictures-hollywood-film-studio-logo-png-favpng-nf30cRSPnNAdJ5GD2EEJ3aArP.jpg",
    Thriller:"https://img.favpng.com/18/1/0/computer-icons-thriller-film-noir-png-favpng-XJvsPDjV6hcGmYUNEuDpBj3Bh_t.jpg",
  }

  constructor(private bookservice: BooksService, private router: Router) {
    this.selectedGenres = this.bookservice.selectedGenre;
    this.fiction = this.bookservice.fiction;
    this.nonfiction = this.bookservice.nonfiction;
    this.fictionGenres = this.bookservice.fictionGenres;
    this.nonfictionGenres = this.bookservice.nonfictionGenres;
    this.books = this.bookservice.books;
  }
  getObjectKeys(obj: { [key: string]: boolean }): string[] {
    return Object.keys(obj);
  }

  toggleValue(key: string, obj: { [key: string]: boolean }): void {
    obj[key] = !obj[key];
    console.log(obj);
  }
  

  showBooks(genre: string) {
    this.bookservice.selectedGenre = genre;
    
    this.router.navigate(['/home/books'])
    console.log(this.bookservice.selectedGenre)
  }
}