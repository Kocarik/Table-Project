import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private user: User;
  private visibleTable: boolean = false;
  
  title = 'Table Project';

  constructor(private userService: UserService) {
    if(userService.getUsers().length > 0){
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
