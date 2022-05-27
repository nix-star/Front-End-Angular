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

  //private apiUrl: string = `https://ap-back-end-springboot.herokuapp.com/api`;
  private apiUrl: string = `https://localhost:8080/api`;
  private apiUsr: string = `${this.apiUrl}/user`
  private apiExp: string = `${this.apiUrl}/experience`
  private apiSki: string = `${this.apiUrl}/skill`;
  private apiPro: string = `${this.apiUrl}/project`;

  constructor(private http: HttpClient) { }

  /**User service**/
  changeStatus(user: User): Observable<User>{
    let params: string = `?name=${user.name}&user=${user.user}&password=${user.password}&profesion=${user.profesion}&img=${user.img}&active=${user.active}`;
    return this.http.put<User>(`${this.apiUsr}/edit/${user.id}${params}`, user, httpOptions);
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiUsr}/${id}`);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUsr}`);
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
    return this.http.post<Skill>(this.apiSki + "/create", skill);
  }

  removeSkill(skill: Skill): Observable<Skill> {
    return this.http.delete<Skill>(`${this.apiSki}/delete/${skill.id}`);
  }


  /**Projects service**/
  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiPro);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiPro + "/create", project);
  }

  removeProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`${this.apiPro}/delete/${project.id}`);  
  }

}
