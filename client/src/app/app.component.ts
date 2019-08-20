import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  user: any = String
  isAuthenticated: any = Boolean;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user')).email
      this.isAuthenticated = true
    } else {
      this.user = 'Not Authenticated'
      this.isAuthenticated = false
    }
  }

  logout() {
    alert('1')
    localStorage.clear()
    this.ngOnInit()
    this.router.navigate(['auth/login'])
  }
}
