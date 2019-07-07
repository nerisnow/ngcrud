import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { User } from '../userdata';



@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass']
})


export class UpdateUserComponent implements OnInit {
  user: User;
  users:User[];
  //userFormGroup: FormGroup;

  constructor(private userservice:UserService) { }

  getUsers(){
    this.userservice.getUsers().subscribe(data => {
      this.users = data.data;
    });
  }

  // idtoUpdate = 0;
  // updateUser() {
  //   //this.userservice.getUser(this.idtoUpdate).subscribe(data => {
  //     // this.user = data;
  //     this.user = this.userFormGroup.value;
  //     this.userservice.updateUser(this.user).subscribe(data1 => {
  //       this.getUsers();
  //     });
  //  }

  // getUser() {
  //   this.userservice.getUser(this.idtoUpdate).subscribe(data => {
  //      this.user = data;
  //     //this.user = this.userFormGroup.value;
  //     // this.userservice.updateUser(this.user).subscribe(data1 => {
  //     //   this.getUsers();
  //     // });
  //   });
  // }

  // fetchId = 0;

  // getUser() {
  //   this.userservice.getUser(this.fetchId).subscribe(data => {
  //     this.user = data;
  //    this.displayData=true;
  //   });
  // }


  idtoUpdate = 0;
  updateUser() {
    this.userservice.getUser(this.idtoUpdate).subscribe(data => {
      this.user = data;
      this.user.email = 'Updated updated';
      this.userservice.updateUser(this.user).subscribe(data1 => {
        this.getUsers();
      });
    });
  }


  ngOnInit() {
    // this.userFormGroup = new FormGroup(
    //   {
    //     email:new FormControl('email'),
    //     first_name: new FormControl('first_name'),
    //     last_name:new FormControl('last_name'),
    //     avatar: new FormControl('avatar')

    //   },
    // );
    this.getUsers();
    // this.getUser();
  }
  

}
