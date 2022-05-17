import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../Interfaces';

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

  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiExp);
  }

  addExp(str: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiExp, str);
  }

  removeExp(exp: Experience): Observable<Object> {
    return this.http.delete<Experience>(`${this.apiExp}/${exp.id}`)
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
