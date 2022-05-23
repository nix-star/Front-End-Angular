import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience, Project, Skill } from '../Interfaces';
import { User } from '../Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DbService {

  loggedIn: boolean;
  loginMenu: boolean;
  userId: number = 1;

  private port: number = 5000;
  private apiUrl: string = `http://localhost:${this.port}`;
  private apiExp: string = `${this.apiUrl}/experience`;
  //private apiUser: string = `${this.apiUrl}/user`
  private apiEdu: string = `${this.apiUrl}/education`;
  private apiSki: string = `${this.apiUrl}/skills`;
  private apiPro: string = `${this.apiUrl}/projects`;

  private apiUser: string = `http://localhost:8080/user`

  constructor(private http: HttpClient) { }

  changeStatus(user: User): Observable<User>{
    let params: string = `?name=${user.name}&user=${user.user}&password=${user.password}&profesion=${user.profesion}&img=${user.img}&active=${user.active}`;
    return this.http.put<User>(`${this.apiUser}/edit/${user.id}${params}`, user, httpOptions);
  }

  getUser(id: number): Observable<User>{
    //return this.http.get<User>(`${this.apiUrl}/user/${id}`);
    return this.http.get<User>(`${this.apiUser}/${id}`);
  }

  getUsers(): Observable<User[]>{
    //return this.http.get<User[]>(`${this.apiUrl}/user`);
    return this.http.get<User[]>(`${this.apiUser}`);
  }

  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiExp);
  }

  addExp(exp: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiExp, exp);
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

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiSki, skill);
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiPro);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiPro, project);
  }

}
