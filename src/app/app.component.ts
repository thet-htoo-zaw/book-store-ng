import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book/book-list/book-list.component";
import { catchError, delayWhen, from, map, of, retry, retryWhen, tap, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: any;
  ngOnInit(): void {
    const stream$ = from([5,'6','7','8','Hello','9','10','11']);

  // stream$.pipe(
  //   map((value)=> {
  //     if(isNaN(value as any)) {
  //       throw new Error('this is not a number')
  //   }
  //   return parseInt
  //   }),
  //   // retry(2),
  //   retryWhen(error=>{
  //     return error.pipe(
  //       delayWhen(()=>timer(3000)),
  //       tap(()=> console.log("Retrying the source observable"))
  //     )
  //   }),
  //   catchError((err) => {
  //     console.log('Caught error: ', err);
  //     return throwError(()=> err);
  //   })
  // ).subscribe({
  //   next: data => console.log('Value Emitted : ', data),
  //   error: err => console.error('Error occured : ', err),
  //   complete: () => console.log('Stream completed')
  // })
  }

  
}
