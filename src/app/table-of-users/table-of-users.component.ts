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
  private visibleTable: boolean = false;

  constructor(private userService: UserService) {
    if(this.userService.getUsers().length > 0){
      this.visibleTable = true;
    } else {
      this.visibleTable = false;
    }
  } 

  ngOnInit() {
  }

  private removeUser(): void {
    this.userService.removeUserko(this.user);
  }

}
