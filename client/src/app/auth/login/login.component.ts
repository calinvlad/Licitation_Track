import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  errorMessage: any = String;
  $user: any = Array;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private appComponent: AppComponent
  ) {}

  ngOnInit() {
    this.errorMessage = null;
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this._authService.login(this.loginForm.value).subscribe(result => {
      this.$user = result
      localStorage.setItem('user', JSON.stringify(this.$user.data))
      localStorage.setItem('token', JSON.stringify(this.$user.token))
      this.appComponent.ngOnInit()
      this.router.navigate(['private'])
    },
      err => {
        this.errorMessage = err.error.message
      })
  }

  closeAlert() {
    this.errorMessage = null;
  }

}
