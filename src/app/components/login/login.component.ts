import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit(): void {
    this.db.loginMenu = true;
  }

  datosIncorrectos(): boolean {
    if(this.user !== 'nix') return true;
    if(this.password !== '1234') return true;
    return false;
  }

  onSubmit(): void {
    if(this.datosIncorrectos()) this.loginError = true
    else {
      //HARDCODEADO
      this.db.changeStatus({
        "id": 1,
        "name": "Nicolás Chiesa",
        "user": "nix",
        "password": "1234",
        "profesion": "Desarrollador Web",
        "img": "/assets/profile.jpg",
        "active": true
    }).subscribe();
      this.db.loggedIn = true;
      this.router.navigate(['/']);
    }
  }

}
