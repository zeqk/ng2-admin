import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Http } from '@angular/http';

import { environment } from '../../../environments/environment';
import { contentHeaders } from '../../common';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private http: Http, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      
      let body = `username=${values.email}&password=${values.password}`;
      let loginUrl = `${environment.apiUrl}users/authentication`;
      this.http.post(loginUrl, body, { headers: contentHeaders })
        .subscribe(
          response => {
            localStorage.setItem('token', response.json().token);
            this.router.navigate(['home']);
          },
          error => {
            alert(error.text());
            console.log(error.text());
          }
        );
    }
  }
}
