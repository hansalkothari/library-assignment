import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  selectedGenre: string;
  
  fiction:Boolean  =  false;
  nonfiction:Boolean  = false;
  fav: Boolean = false;

  constructor(private formBuilder : FormBuilder) {
    this.selectedGenre = ""
   }
  fictionGenres:{ [key: string]: boolean } = {
    Action: false,
    Adventure: false,
    Crime: false,
    Dystopian: false,
    Fantasy: false,
    Historical: false,
    Horror: false,
    Mystery: false,
    Romance: false,
    ScienceFiction: false,
    Thriller: false,
    Western: false
  }
  nonfictionGenres: { [key: string]: boolean } =  {
    'Biography': false,
    'Business': false,
    'Cooking': false,
    'History': false,
    'Memoir': false,
    'Self-Help': false,
    'Science': false,
    'Technology': false,
    'Travel': false,
    'Health': false,
    'Politics': false,
    'Art': false
  };
  books :Array<Book> = [
    {
      name: 'The Bourne Identity',
      author: 'Robert Ludlum',
      price: 9.99,
      rating: 4.1,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Die Hard',
      author: 'Roderick Thorp',
      price: 8.99,
      rating: 4.5,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Mission: Impossible',
      author: 'Martin Caidin',
      price: 12.99,
      rating: 4.2,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 10.99,
      rating: 4.4,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Jurassic Park',
      author: 'Michael Crichton',
      price: 11.99,
      rating: 4.6,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Da Vinci Code',
      author: 'Dan Brown',
      price: 9.99,
      rating: 4.3,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Maze Runner',
      author: 'James Dashner',
      price: 8.99,
      rating: 4.0,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Expendables',
      author: 'David Callaham',
      price: 7.99,
      rating: 4.2,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Fast and the Furious',
      author: 'Gary Scott Thompson',
      price: 10.99,
      rating: 4.5,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Avengers',
      author: 'Stan Lee',
      price: 11.99,
      rating: 4.7,
      genre: 'Action',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 9.99,
      rating: 4.6,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      price: 7.99,
      rating: 4.4,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Treasure Island',
      author: 'Robert Louis Stevenson',
      price: 8.99,
      rating: 4.2,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Adventures of Tom Sawyer',
      author: 'Mark Twain',
      price: 9.99,
      rating: 4.3,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Jungle Book',
      author: 'Rudyard Kipling',
      price: 7.99,
      rating: 4.1,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Around the World in Eighty Days',
      author: 'Jules Verne',
      price: 10.99,
      rating: 4.5,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'Gulliver\'s Travels',
      author: 'Jonathan Swift',
      price: 8.99,
      rating: 4.2,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'21 6'
    },
    {
      name: 'The Call of the Wild',
      author: 'Jack London',
      price: 9.99,
      rating: 4.3,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
      price: 11.99,
      rating: 4.4,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Journey to the Center of the Earth',
      author: 'Jules Verne',
      price: 10.99,
      rating: 4.5,
      genre: 'Adventure',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      price: 9.99,
      rating: 4.2,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Gone Girl',
      author: 'Gillian Flynn',
      price: 8.99,
      rating: 4.3,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Silence of the Lambs',
      author: 'Thomas Harris',
      price: 10.99,
      rating: 4.5,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Godfather',
      author: 'Mario Puzo',
      price: 11.99,
      rating: 4.7,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Mystic River',
      author: 'Dennis Lehane',
      price: 8.99,
      rating: 4.1,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Lincoln Lawyer',
      author: 'Michael Connelly',
      price: 10.99,
      rating: 4.4,
      genre: 'Crime',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: '1984',
      author: 'George Orwell',
      price: 9.99,
      rating: 4.6,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Brave New World',
      author: 'Aldous Huxley',
      price: 8.99,
      rating: 4.4,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      price: 10.99,
      rating: 4.5,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      price: 9.99,
      rating: 4.3,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Maze Runner',
      author: 'James Dashner',
      price: 8.99,
      rating: 4.1,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Giver',
      author: 'Lois Lowry',
      price: 7.99,
      rating: 4.0,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Station Eleven',
      author: 'Emily St. John Mandel',
      price: 11.99,
      rating: 4.6,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Never Let Me Go',
      author: 'Kazuo Ishiguro',
      price: 10.99,
      rating: 4.4,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Road',
      author: 'Cormac McCarthy',
      price: 9.99,
      rating: 4.3,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      price: 8.99,
      rating: 4.2,
      genre: 'Dystopian',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      price: 9.99,
      rating: 4.7,
      genre: 'Fantasy',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: 12.99,
      rating: 4.9,
      genre: 'Fantasy',
      favorite: false,
      archive: false,
      date:'22 6'
    },
    {
      name: 'A Game of Thrones',
      author: 'George R.R. Martin',
      price: 11.99,
      rating: 4.8,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'Percy Jackson & The Olympians: The Lightning Thief',
      author: 'Rick Riordan',
      price: 8.99,
      rating: 4.6,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
      price: 10.99,
      rating: 4.7,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'The Name of the Wind',
      author: 'Patrick Rothfuss',
      price: 9.99,
      rating: 4.5,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'The Magicians',
      author: 'Lev Grossman',
      price: 8.99,
      rating: 4.4,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'Eragon',
      author: 'Christopher Paolini',
      price: 7.99,
      rating: 4.3,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'American Gods',
      author: 'Neil Gaiman',
      price: 11.99,
      rating: 4.6,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 9.99,
      rating: 4.6,
      genre: 'Fantasy',
      favorite: false,
      archive: false
    },
    {
      name: 'The Book Thief',
      author: 'Markus Zusak',
      price: 9.99,
      rating: 4.5,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'All the Light We Cannot See',
      author: 'Anthony Doerr',
      price: 10.99,
      rating: 4.6,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 9.99,
      rating: 4.3,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 12.99,
      rating: 4.7,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'Gone with the Wind',
      author: 'Margaret Mitchell',
      price: 11.99,
      rating: 4.5,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'The Pillars of the Earth',
      author: 'Ken Follett',
      price: 11.99,
      rating: 4.6,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 9.99,
      rating: 4.5,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'The Help',
      author: 'Kathryn Stockett',
      price: 8.99,
      rating: 4.3,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'The Kite Runner',
      author: 'Khaled Hosseini',
      price: 9.99,
      rating: 4.4,
      genre: 'Historical',
      favorite: false,
      archive: false
    },
    {
      name: 'Dracula',
      author: 'Bram Stoker',
      price: 9.99,
      rating: 4.3,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'Frankenstein',
      author: 'Mary Shelley',
      price: 8.99,
      rating: 4.2,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'The Shining',
      author: 'Stephen King',
      price: 9.99,
      rating: 4.4,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'It',
      author: 'Stephen King',
      price: 10.99,
      rating: 4.6,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'The Exorcist',
      author: 'William Peter Blatty',
      price: 8.99,
      rating: 4.1,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'Psycho',
      author: 'Robert Bloch',
      price: 7.99,
      rating: 4.0,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'The Haunting of Hill House',
      author: 'Shirley Jackson',
      price: 9.99,
      rating: 4.3,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'Pet Sematary',
      author: 'Stephen King',
      price: 8.99,
      rating: 4.2,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'Coraline',
      author: 'Neil Gaiman',
      price: 7.99,
      rating: 4.0,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'The Call of Cthulhu',
      author: 'H.P. Lovecraft',
      price: 9.99,
      rating: 4.3,
      genre: 'Horror',
      favorite: false,
      archive: false
    },
    {
      name: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      price: 9.99,
      rating: 4.2,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'Gone Girl',
      author: 'Gillian Flynn',
      price: 8.99,
      rating: 4.3,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Da Vinci Code',
      author: 'Dan Brown',
      price: 9.99,
      rating: 4.3,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Girl on the Train',
      author: 'Paula Hawkins',
      price: 8.99,
      rating: 4.2,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'And Then There Were None',
      author: 'Agatha Christie',
      price: 7.99,
      rating: 4.1,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Hound of the Baskervilles',
      author: 'Arthur Conan Doyle',
      price: 9.99,
      rating: 4.3,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The No. 1 Ladies\' Detective Agency',
      author: 'Alexander McCall Smith',
      price: 8.99,
      rating: 4.2,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Secret History',
      author: 'Donna Tartt',
      price: 7.99,
      rating: 4.1,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Cuckoo\'s Calling',
      author: 'Robert Galbraith',
      price: 9.99,
      rating: 4.3,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'The Maltese Falcon',
      author: 'Dashiell Hammett',
      price: 8.99,
      rating: 4.1,
      genre: 'Mystery',
      favorite: false,
      archive: false
    },
    {
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 9.99,
      rating: 4.5,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Romeo and Juliet',
      author: 'William Shakespeare',
      price: 8.99,
      rating: 4.4,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Outlander',
      author: 'Diana Gabaldon',
      price: 9.99,
      rating: 4.3,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'The Notebook',
      author: 'Nicholas Sparks',
      price: 8.99,
      rating: 4.2,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Me Before You',
      author: 'Jojo Moyes',
      price: 7.99,
      rating: 4.1,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Jane Eyre',
      author: 'Charlotte Bronte',
      price: 9.99,
      rating: 4.3,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'The Fault in Our Stars',
      author: 'John Green',
      price: 8.99,
      rating: 4.2,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Gone with the Wind',
      author: 'Margaret Mitchell',
      price: 11.99,
      rating: 4.5,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'The Time Traveler\'s Wife',
      author: 'Audrey Niffenegger',
      price: 9.99,
      rating: 4.4,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Call Me by Your Name',
      author: 'Andre Aciman',
      price: 10.99,
      rating: 4.5,
      genre: 'Romance',
      favorite: false,
      archive: false
    },
    {
      name: 'Dune',
      author: 'Frank Herbert',
      price: 9.99,
      rating: 4.5,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'Ender\'s Game',
      author: 'Orson Scott Card',
      price: 8.99,
      rating: 4.4,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    
    {
      name: 'The Hitchhiker\'s Guide to the Galaxy',
      author: 'Douglas Adams',
      price: 8.99,
      rating: 4.3,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'Neuromancer',
      author: 'William Gibson',
      price: 7.99,
      rating: 4.2,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'Snow Crash',
      author: 'Neal Stephenson',
      price: 9.99,
      rating: 4.4,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'Foundation',
      author: 'Isaac Asimov',
      price: 8.99,
      rating: 4.3,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'The Left Hand of Darkness',
      author: 'Ursula K. Le Guin',
      price: 7.99,
      rating: 4.1,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'Hyperion',
      author: 'Dan Simmons',
      price: 9.99,
      rating: 4.4,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'The Martian',
      author: 'Andy Weir',
      price: 8.99,
      rating: 4.2,
      genre: 'ScienceFiction',
      favorite: false,
      archive: false
    },
    {
      name: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      price: 9.99,
      rating: 4.2,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'Gone Girl',
      author: 'Gillian Flynn',
      price: 8.99,
      rating: 4.3,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Da Vinci Code',
      author: 'Dan Brown',
      price: 9.99,
      rating: 4.3,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Girl on the Train',
      author: 'Paula Hawkins',
      price: 8.99,
      rating: 4.2,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Silence of the Lambs',
      author: 'Thomas Harris',
      price: 10.99,
      rating: 4.5,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Bourne Identity',
      author: 'Robert Ludlum',
      price: 9.99,
      rating: 4.1,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Firm',
      author: 'John Grisham',
      price: 8.99,
      rating: 4.0,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Hunt for Red October',
      author: 'Tom Clancy',
      price: 9.99,
      rating: 4.1,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Day of the Jackal',
      author: 'Frederick Forsyth',
      price: 8.99,
      rating: 4.0,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'The Lincoln Lawyer',
      author: 'Michael Connelly',
      price: 10.99,
      rating: 4.4,
      genre: 'Thriller',
      favorite: false,
      archive: false
    },
    {
      name: 'Lonesome Dove',
      author: 'Larry McMurtry',
      price: 9.99,
      rating: 4.4,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'True Grit',
      author: 'Charles Portis',
      price: 8.99,
      rating: 4.2,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'Blood Meridian',
      author: 'Cormac McCarthy',
      price: 9.99,
      rating: 4.3,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'The Sisters Brothers',
      author: 'Patrick deWitt',
      price: 8.99,
      rating: 4.1,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'Riders of the Purple Sage',
      author: 'Zane Grey',
      price: 7.99,
      rating: 4.0,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'Hondo',
      author: 'Louis L\'Amour',
      price: 9.99,
      rating: 4.2,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'The Shootist',
      author: 'Glendon Swarthout',
      price: 8.99,
      rating: 4.1,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'Woe to Live On',
      author: 'Daniel Woodrell',
      price: 7.99,
      rating: 4.0,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'The Ox-Bow Incident',
      author: 'Walter Van Tilburg Clark',
      price: 9.99,
      rating: 4.2,
      genre: 'Western',
      favorite: false,
      archive: false
    },
    {
      name: 'The Virginian',
      author: 'Owen Wister',
      price: 8.99,
      rating: 4.1,
      genre: 'Western',
      favorite: false,
      archive: false
    }
  ]
  
 
  get getBooks(){
    return this.books
  }
  
  
  
}
