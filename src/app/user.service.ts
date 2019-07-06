import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from './userdata';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
    apiUrl = "https://reqres.in/api/users";
  

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getUsers(): Observable<any> {
     return this.http.get<any>(this.apiUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  addUser (user: User): Observable<User> {
    //user.id=null;
    return this.http.post<User>(this.apiUrl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
}
}
