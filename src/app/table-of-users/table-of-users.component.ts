import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table-of-users',
  templateUrl: './table-of-users.component.html',
  styleUrls: ['./table-of-users.component.css']
})
export class TableOfUsersComponent implements OnInit {

  private user: User;
  private users: User[] = this.userService.getUsers();
  private pleaseAddUser = 'Please add the user using the form on the left!';

  constructor(private userService: UserService) {
  } 

  ngOnInit() {
  }

  private removeUser(): void {
    this.userService.removeOneUser(this.user);
  }

}
