import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience, Project, Skill, User } from '../Interfaces';
import { EDUCATION_LIST } from '../mock-education';

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
  //private apiUser: string = `${this.apiUrl}/user`
  //private apiExp: string = `${this.apiUrl}/experience`;
  //private apiEdu: string = `${this.apiUrl}/education`;
  private apiSki: string = `${this.apiUrl}/skills`;
  private apiPro: string = `${this.apiUrl}/projects`;

  private apiUser: string = `http://localhost:8080/user`
  private apiExp: string = `http://localhost:8080/experience`

  constructor(private http: HttpClient) { }

  /**User service**/
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


  /**Experience service**/
  getExp(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiExp);
  }

  addExp(exp: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.apiExp}/create`, exp);
  }

  removeExp(exp: Experience): Observable<Experience> {
    return this.http.delete<Experience>(`${this.apiExp}/delete/${exp.id}`);
  }

  updateExp(exp: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiExp}/edit/${exp.id}?job=${exp.job}`, exp, httpOptions);
  }


  /**Education service**/
  getEdu(): Observable<Object> {
    //return this.http.get<Object>(this.apiEdu); 
    return of(EDUCATION_LIST);
  }


  /**Skill service**/
  getSkills(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiSki);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiSki, skill);
  }

  removeSkill(skill: Skill): Observable<Skill> {
    return this.http.delete<Skill>(`${this.apiSki}/${skill.id}`);
  }


  /**Projects service**/
  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiPro);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiPro, project);
  }

}
