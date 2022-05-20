import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  profileImg: string;
  
  constructor(public db: DbService, private router: Router) { }

  ngOnInit(): void {
    this.db.getUser(this.db.userId).subscribe(user => this.currentUser = user);
    this.db.getUser(this.db.userId).subscribe(user => this.db.loggedIn = user.active);
    this.db.getUser(this.db.userId).subscribe(user => this.profileImg = user.img);
  }

  toggleLog(): void {
    if(this.db.loggedIn) {
      this.currentUser.active = false;
      this.db.changeStatus(this.currentUser).subscribe(()=>{
        this.db.loggedIn=false;
        window.location.reload();
      });
    }
    else this.router.navigate(['/login']);

  }

  changeImg(): void {
    let aux: any = prompt("Ingresar la URL de la nueva imagen de perfil :: PNG | JPG | SVG");
    if(typeof aux === 'string') this.profileImg = 
      /(svg|png|jpg)$/gmi.test(aux) ? aux: this.profileImg;

    this.currentUser.img = this.profileImg;
    this.db.changeStatus(this.currentUser).subscribe();
  }
}
