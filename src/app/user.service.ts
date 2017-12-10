import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

  private nextId: number;

  constructor() {
    let users = this.getUsers();

    if(users.length == 0) {
      this.nextId = 1;
    } else {
      let maxId = users[users.length - 1].id;
      this.nextId = maxId + 1;
    }
   }

   public addUser(firstName: string, lastName: string, gender: string, dOb: number): void {     
     let user = new User(this.nextId, firstName, lastName, gender, dOb);
     let users = this.getUsers();
     users.push(user);

     this.setUsersToLocalStorage(users);
     this.nextId++;
   }

   public getUsers(): User[] {
    let localStorageItems = JSON.parse(localStorage.getItem('users'));
    return localStorageItems == null ? [] : localStorageItems.users;
   }


   public removeUser(id: number): void {
    let users = this.getUsers();
    users = users.filter((user)=> user.id != id);
    this.setUsersToLocalStorage(users);
   }

   public removeUserko(user: User){
    let users = this.getUsers();
    users.splice(users.indexOf(user), 1);
    this.setUsersToLocalStorage(users);
   }

   public removeAllUsers(): void {
    let users = this.getUsers();
    users.splice(UserService.length);
    localStorage.removeItem('users');
   }

   private setUsersToLocalStorage(users: User[]): void {
     localStorage.setItem('users', JSON.stringify({users}));
   }

}
