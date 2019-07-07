import { Component, OnInit } from '@angular/core';
import {User} from '../userdata';
import {UserService} from '../user.service'

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.sass']
})
export class DeleteUserComponent implements OnInit {
  users: User[];
  user: User;
  //displayData: boolean;

  constructor(private userservice:UserService) { }


  getUsers(){
    this.userservice.getUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  idtodelete=0;
  deleteUser() {
    this.userservice.deleteUser(this.idtodelete).subscribe(data => {
      this.getUsers();
    });
  }

  ngOnInit() {
    this.getUsers();
    this.deleteUser();

  }

  
  
}
