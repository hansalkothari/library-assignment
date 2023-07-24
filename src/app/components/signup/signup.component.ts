import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  sign: any;
  hidePassword : Boolean = true;
  hidePassword2 : Boolean = true;
  
  constructor(private userService : UserService, private router : Router){
    this.sign = new FormGroup({
      firstname : new FormControl('',[Validators.required]),
      lastname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(8)]),
      cnfpassword : new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }

  /*-------------------------------CUSTOM FORM VALIDATION--------------------------------*/
  passwordMatchValidator(ps : AbstractControl , cnf : AbstractControl): ValidationErrors  {
    if(ps.value == cnf.value){
      return {
        passwordMismatch:false
      }
    }
    return {
      passwordMismatch:true
    }
  }

  get firstname(){
    return this.sign.get('firstname')
  }
  get lastname(){
    return this.sign.get('lastname')
  }
  get password(){
    return this.sign.get('password')
  }
  get cnfpassword(){
    return this.sign.get('cnfpassword')
  }
  get email(){
    return this.sign.get('email')
  }
  
  //collects an user's data and store it in the localstorage in the form of an array.
  onSubmit(){
    const prev = localStorage.getItem('allUsers')
    if(prev!=null){
      const prevUsers = JSON.parse(prev)
      this.userService.allUsers = [...prevUsers]
    }
    if(this.sign.valid){
      const usr = this.sign.value
      this.userService.allUsers.push(usr)
      const users = JSON.stringify(this.userService.allUsers)
      localStorage.setItem('allUsers',users)
    }
    this.userService.isUserLogged = true;
    console.log(localStorage.getItem('allUsers'))
    this.userService.currentUser = this.sign.value
    localStorage.setItem('currentUser',JSON.stringify(this.sign.value))
    
    this.router.navigate([''])
    console.log(this.userService.currentUser)
    console.log('control reaches after routing!!')
  }

}
