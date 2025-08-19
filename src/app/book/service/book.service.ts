import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../ds/book';
import { BehaviorSubject, shareReplay, retry, retryWhen, timer, delayWhen, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$:BehaviorSubject<Book[]>=new BehaviorSubject<Book[]>([]); //

  books$=this.bookSubject$.asObservable(); // convert ot plain observable and prevents modify values use next(),etc...

  BASE_URL = "http://localhost:8080/book";

  constructor(private http:HttpClient) { 
    this.getAllBooks()
    .pipe(
      shareReplay(), // behavior တူရင် တူတာပြန်  ေပး
      retryWhen(error=>{
        return error.pipe(
          delayWhen(()=> timer(3000)),
          tap(()=> console.log("Retrying the source observable", error))
        )
      })
    )
    .subscribe(
      {
        next: data => this.bookSubject$.next(data),
        error: (err) => console.log('Error retrieving books:', err)
      }
    );
  }
  private getAllBooks():Observable<Book[]> {
    return this.http.get<Book[]>(`${this.BASE_URL}/all`);

  }
}
