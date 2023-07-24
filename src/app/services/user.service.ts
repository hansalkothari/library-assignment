import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLogged:Boolean = false;
  allUsers : User[] = []
  currentUser : User | undefined;



  constructor() { }
}
