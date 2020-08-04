import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})  
export class ContactService {
  constructor(private http: HttpClient) { }

  contactUrl = "https://localhost:44380/api/Contacts";

  postContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl, contact);
      //.pipe(
      //  catchError(this.handleError<Contact>('postContact'))
      //);
  }

  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {
  //    console.error(error);

  //    return of(result as T);
  //  }
  //}

}
