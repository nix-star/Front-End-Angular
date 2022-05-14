import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { SrvRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private apiExp: string = "http://localhost:5000/experience";

  constructor(private http: HttpClient) { }

  getExp(): Observable<string[]> {
    return this.http.get<string[]>(this.apiExp);
  }
}
