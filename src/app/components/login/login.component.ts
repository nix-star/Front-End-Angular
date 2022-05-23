import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: string = '';
  loginPass: string = '';
  loginError: boolean = false;
  currentUser: User;

  constructor(private db: DbService, private router: Router) { }

  ngOnInit(): void {
    this.db.loginMenu = true;
    this.db.getUser(this.db.userId).subscribe(user => this.currentUser = user)
  }

  datosIncorrectos(): boolean {
    //HARDCODEADO
    if(this.loginUser !== 'nix') return true;
    if(this.loginPass !== '1234') return true;
    return false;
  }

  onSubmit(): void {
    if(this.datosIncorrectos()) this.loginError = true
    else {
      this.db.loggedIn = true;
      this.currentUser.active = true;
      this.db.changeStatus(this.currentUser).subscribe(() => this.router.navigate(['/']));
    }
  }

}
