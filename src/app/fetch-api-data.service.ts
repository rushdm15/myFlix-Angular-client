import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

//Declaring the api url that will provide data for the client app
const apiUrl = 'YOUR_HOSTED_API_URL_HERE/';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  } 
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  // Inject the HttpClient module to the constructor params
 // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {
  }
 // Making the api call for the user login endpoint
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getAllMovies {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getOneMovie {
  constructor(private http: HttpClient) {}

getOneMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movie', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getDirector {
  constructor(private http: HttpClient) {}

getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'director', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getGenre {
  constructor(private http: HttpClient) {}

  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'genre', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getUser {
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'user', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class getFavoriteMovie {
  constructor(private http: HttpClient) {}
  getFavoriteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'FavoriteMovie', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class addFavorite {
  constructor(private http: HttpClient) {}
  addFavorite(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'favorite', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class editUser {
  constructor(private http: HttpClient) {}

  editUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'user', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class deleteUser {
  constructor(private http: HttpClient) {}
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'user', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}

@Injectable({
  providedIn: 'root'
})
export class deleteUser {
  constructor(private http: HttpClient) {}
  deleteMovie(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movie', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  // Non-typed response extraction
  private extractResponseData(res: Response): any {
    const body = res;
    return body || { };
  } 
}