import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  errorMessage: any = String;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.errorMessage = null;
    this.registerForm = this.formBuilder.group({
        email: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onSubmit() {
    this._authService.register(this.registerForm.value).subscribe(result => {
      this.router.navigate(['auth/login'])
    },
      err => {
        this.errorMessage = err.error.message
      })
  }

  closeAlert() {
    this.errorMessage = null;
  }

}
