import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any
  submitted :Boolean = false;
  hidePassword: Boolean = true;
  constructor(private router : Router, private userService : UserService){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
    
  }
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  //authentication
  auth():Boolean{
    // const registered = false;
    console.log(this.form.value)
    this.submitted = true
    //find this user in localStorage
    const allUsers = localStorage.getItem("allUsers")
    if(allUsers !== null){
      const users = JSON.parse(allUsers)
      console.log(users)
      for(let user of users){
        if(user.email == this.form.value.email && user.password == this.form.value.password){
          //user authenicated so store in the current user of the service.
          localStorage.setItem('currentUser',JSON.stringify(user))
          this.userService.currentUser = user;
          this.router.navigate([''])
          return true;
        }
      }
    }
    return false;
  }
  register(){
    this.router.navigate(['signup'])
  }
}

