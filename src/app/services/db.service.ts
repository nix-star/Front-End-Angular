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

  //private apiExp: string = "http://localhost:5001/experience";
  //private apiExp: string = "db2.json";

  constructor(private http: HttpClient) { }

  getExp(): Observable<Object[]> {
    return this.http.get<Object[]>(this.apiExp);
  }

  addExp(str: Object): Observable<Object> {
    return this.http.post<Object>(this.apiExp, str);
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
