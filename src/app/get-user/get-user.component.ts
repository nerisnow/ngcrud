import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { User } from '../userdata';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.sass']
})
export class GetUserComponent implements OnInit {

  displayData: boolean;
  user: User;
  //users: User[] = [];

  constructor(private userservice:UserService) {}
  fetchId=0;
  getUser() {
    this.userservice.getUser(this.fetchId).subscribe(data => {
      this.user = data.data;
     this.displayData=true;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}
