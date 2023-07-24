import { Component, OnInit } from '@angular/core';
import { Chart,Point, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables} from 'chart.js';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];
  scatterChart: Chart | undefined;
  barChart: Chart | undefined;
  timeChart : Chart | undefined;
  
  ngOnInit(): void {
    //data prepared for scatter plot
    const scatterData : Point[] = [];
    const freqGenre = [];
    const datefreq = new Map();
    const genreFreq = new Map();

    for(var book of this.books){
      scatterData.push( {x:book.price,y:book.rating} )
    }
    console.log(scatterData)
    //scatter plot
    this.scatterChart = new Chart('scatterChart',{
      type:'scatter',
      data:{
        
        datasets:[{
          label:'Ratings V/S Price',
          data:scatterData,
          backgroundColor:'rgb(255, 99, 132',
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            type: 'linear',
            position: 'bottom',
          },
          
        },
      },

    });

    //frequency of each genre
    for(var book of this.books){
      if(genreFreq.has(book.genre)){
        genreFreq.set(book.genre,genreFreq.get(book.genre)+1)
      }
      else{
        genreFreq.set(book.genre,1)
      }
    }
    console.log(genreFreq)

    //bar chart configuration.
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels:Array.from(genreFreq.keys()),
        datasets: [
          {
            label: 'Frequency Distribution of genres',
            data: Array.from(genreFreq.values()),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
            ],
            borderWidth:1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
    

    //frequency of each date
    for(var book of this.books){
      if(datefreq.has(book.date)){
        datefreq.set(book.date, datefreq.get(book.date)+1)
      }
      else{
        datefreq.set(book.date,1)
      }
    }
    //line chart configuration
    this.timeChart = new Chart('timeChart', {
      type: 'line',
      data: {
        labels: Array.from(datefreq.keys()),
        datasets: [
          {
            label: 'Date V/S number of books added',
            data: Array.from(datefreq.values()),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options:{
        scales:{
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  constructor(private bookservice : BooksService){
    Chart.register(...registerables,BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
    this.books = this.bookservice.books
  }
}
