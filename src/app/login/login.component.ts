import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthRouteService } from '../services/auth-route.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy, OnInit {
  public userapisubscription: Subscription | any;

  constructor(
    private authservice: AuthRouteService,
    private userapicall: ApiService,
    private navroute: Router
  ) {}

  form_data: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  hide = true;
  passordPattern = '^[a-zA-Z@#$%&*0-9_-]{8,15}$';

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(this.passordPattern),
  ]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('pattern') ? 'not a valid password' : '';
  }
  //actual form login button:
  user_data_store: any;
  all_user_data_store: any;
  async GET_LOGIN_FORM_VALUE() {
    this.user_data_store = this.form_data.value;
    console.log(this.user_data_store.email);
    console.log(this.user_data_store.password);
    //call the user gt data api:
    this.userapisubscription = await this.userapicall.GET_USER_DATA().subscribe(
      (res: any) => {
        this.all_user_data_store = res;
        //map the api value ang after match with login field data:
        this.all_user_data_store.map((item: any) => {
          let email_data = item.Email;
          let password_data = item.Password;
          let u_id=item.id;
          let u_name=item.Name
          if (
            this.user_data_store.email === email_data &&
            this.user_data_store.password === password_data
          ) {
            this.authservice.LogIn();
            this.navroute.navigateByUrl('/list');

            
              localStorage.setItem('id',JSON.stringify(u_id))
              localStorage.setItem('user_name',JSON.stringify(u_name))
              localStorage.setItem('email_data', JSON.stringify(email_data));
              localStorage.setItem('password', JSON.stringify(password_data).replace(/@|#|%|&|[A-Z]|[a-z]|[0-9]/g,"*"));
           
            
            
              //session storage clear when site is destroy:
              sessionStorage.setItem('email_data', JSON.stringify(email_data))
              sessionStorage.setItem('password', JSON.stringify(password_data).replace(/@|#|%|&|[A-Z]|[a-z]|[0-9]/g,"*"));
            
            

          }
          if (localStorage.getItem('email_data' && 'password')) {
            this.authservice.LogIn();
            this.navroute.navigateByUrl('/list');
            
          }
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  ngOnDestroy(): void {
    this.userapisubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.GET_LOGIN_FORM_VALUE();
  }
}
