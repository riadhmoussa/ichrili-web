import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/iuser';
import { AppConfig } from '../../app.config';


JSON.parse(localStorage.getItem('currentUser'));

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.css']
})
export class UserBadgeComponent implements OnInit {
  currentUser: any;
  path_to_avatar: string;
  constructor(private config: AppConfig) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if ( this.currentUser.avatar_url) {
      this.path_to_avatar =  this.currentUser.avatar_url;
        }else {
      if ( !this.currentUser.gender || this.currentUser.gender === 'Homme') {
        this.path_to_avatar = 'default-avatar-homme.jpg';
      }else {
        this.path_to_avatar = 'default-avatar-femme.jpg';
      }
    }
    this.path_to_avatar = this.config.apiUrl + '/uploads/avatars/' + this.path_to_avatar;
  }

}
