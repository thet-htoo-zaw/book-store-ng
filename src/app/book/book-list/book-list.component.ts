import { CommonModule } from '@angular/common';
import { BookService } from './../service/book.service';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../ds/book';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnDestroy {
  // books!: Book[];
  // destroy$ = new Subject<void>();
  
  booksService:BookService=inject(BookService);

  books$:Observable<Book[]>=this.booksService.books$;
  // subscription!: Subscription;
  constructor() {}

  ngOnDestroy(): void {
    // this.subscription.unsubscribe;
    // this.destroy$.next();
    // this.destroy$.complete();
  }

  ngOnInit(): void{
    // this.subscription=this.booksService.getAllBooks()
    // this.booksService.getAllBooks()
    // .pipe(
    //   takeUntil(this.destroy$)
    // )
    // .subscribe(
    //   {
    //     next: data => this.books = data,
    //     error: (err) => console.log('Error retrieving books:', err),
    //     complete: () => console.log('Completed')
    //   }
    // );
  }
}
