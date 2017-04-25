import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navabar/navbar/navbar.component';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../models/iuser';

@Component({
  selector: 'app-update-settings',
  templateUrl: './update-settings.component.html',
  styleUrls: ['./update-settings.component.css']
})

export class UpdateSettingsComponent implements OnInit {
   genders = [
    { value: 'Homme', display: 'Homme' },
    { value: 'Femme', display: 'Femme' }
  ];

  model: any= {};
  loading = false;
  constructor( private router: Router,
              private alertService: AlertService,
              private userService: UserService) { }

  ngOnInit() {
    const id = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.userService.getById(id)
    .subscribe(
      data => {
          this.model = data;
      },
      error => {
       this.alertService.error(error._body);
      }
    );
  }

  updateUser() {
    this.model.id = JSON.parse(localStorage.getItem('currentUser'))._id;
    this.userService.update(this.model).subscribe(
      data => {
        this.alertService.success('Update Profile successful', true);
        this.router.navigate(['/home']);
      },
      error => {
        this.alertService.error(error._body);
        this.loading = false;
      }
    );
  }
}
