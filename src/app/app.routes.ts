import { Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookCardComponent } from './book/book-list/book-card/book-card.component';

export const routes: Routes = [
    {
        path: '',
        component: BookListComponent
    },
    {
        path:'book-detail', component: BookCardComponent
    }
];
