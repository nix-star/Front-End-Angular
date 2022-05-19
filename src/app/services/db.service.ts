import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../Interfaces';
import { Skill } from '../Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

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

  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiExp);
  }

  addExp(str: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiExp, str);
  }

  removeExp(exp: Experience): Observable<Experience> {
    return this.http.delete<Experience>(`${this.apiExp}/${exp.id}`);
  }

  updateExp(exp: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiExp}/${exp.id}`, exp, httpOptions);
  }

  getEdu(): Observable<Object> {
    return this.http.get<Object>(this.apiEdu);
  }

  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiSki);
  }

  getProjects(): Observable<Object[]>{
    return this.http.get<Object[]>(this.apiPro);
  }

}
