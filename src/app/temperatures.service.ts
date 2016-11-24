import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import {Temperature} from "./Temperature";

@Injectable()
export class TemperaturesService {

  constructor(private http: Http) {
  }

  getTemps (fileName): Observable<Temperature[]> {
    return this.http
      .get(`/assets/${fileName}`)
      .map(response => {
        return response.json() as Temperature[];
      })
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
