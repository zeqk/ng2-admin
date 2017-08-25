import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { environment  } from '../../../environments/environment';
import { User, contentHeaders } from '../../common';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  get(): Observable<User[]> {
    let token = localStorage.getItem('token');
    let url = `${environment.apiUrl}users/?token=${token}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  add(data : User): Observable<User> {
    
    let token = localStorage.getItem('token');
    let url = `${environment.apiUrl}users/?token=${token}`;
    return this.http.post(url, { data }, { headers: contentHeaders })
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    
    return body.users || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  find(data : { name: string, number: number }) : Observable<User[]> {
    let token = localStorage.getItem('token');
    let url = `${environment.apiUrl}users/?token=${token}`;
    return this.http.get(url + `/?name=${data.name}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
