import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Mash } from './mash'
import { Cat } from './cat'

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
 
@Injectable()
export class CatMashService {
  
    constructor(private http: Http) {
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private mashUrl = 'api/catmash';

    getMash(): Promise<Mash> {
        return this.http.get(this.mashUrl)
            .toPromise()
            .then(response => response.json().data as Mash)
            .catch(this.handleError); 
    }

    voteMash(catId: string): Promise<void> {
        const url = `${this.mashUrl}/${catId}`;
        return this.http.put(url, JSON.stringify(catId), {
           headers: this.headers
        }).toPromise()
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}