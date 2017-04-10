import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // get users from secure api end point
    this.userService.getAll()
      .subscribe(users => {
        this.users = users;
      });
  }
}



