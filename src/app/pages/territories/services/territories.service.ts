import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { environment  } from '../../../../environments/environment';
import { Territory } from '../.';

@Injectable()
export class TerritoriesService {

  url = 'api/territories';

  constructor(private http: Http) { }

  get(): Observable<Territory[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }
  add(data : Territory): Observable<Territory> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, { data }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
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

  find(data : { name: string, number: number }) : Observable<Territory[]> {
    
    return this.http.get(this.url + `/?name=${data.name}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

}
