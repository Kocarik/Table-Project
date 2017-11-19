import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  private gender: string;
  private dOb: number;


  constructor(private userService: UserService) { 
  }

  ngOnInit() {
  }

  private addUser(): void {
    this.userService.addUser(this.firstName, this.lastName, this.gender, this.dOb);
  }

  private removeAllUsers(): void {
    this.userService.removeAllUsers();
  }

}
