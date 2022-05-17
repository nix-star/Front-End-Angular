import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private port: number = 5000;
  private apiUrl: string = `http://localhost:${this.port}`;
  private apiExp: string = `${this.apiUrl}/experience`;
  private apiEdu: string = `${this.apiUrl}/education`;
  private apiSki: string = `${this.apiUrl}/skills`;
  private apiPro: string = `${this.apiUrl}/projects`;

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

  getProjects(): Observable<Object[]>{
    return this.http.get<Object[]>(this.apiPro);
  }

}
