import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { SrvRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private port: number = 5000;
  private apiUrl: string = `http://localhost:${this.port}`;
  private apiExp: string = `${this.apiUrl}/experience`;
  private apiEdu: string = `${this.apiUrl}/education`;
  private apiSki: string = `${this.apiUrl}/skills`;

  constructor(private http: HttpClient) { }

  getExp(): Observable<string[]> {
    return this.http.get<string[]>(this.apiExp);
  }

  getEdu(): Observable<Object> {
    return this.http.get<Object>(this.apiEdu);
  }

  getSkills(): Observable<Object[]>{
    return this.http.get<Object[]>(this.apiSki);
  }

}
