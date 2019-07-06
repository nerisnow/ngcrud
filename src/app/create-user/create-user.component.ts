import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { User } from '../userdata';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
  
  userFormGroup: FormGroup;
  users: User[];
  user: User;
  
  constructor(private userservice: UserService){}
    getUsers(){
      this.userservice.getUsers().subscribe(data => {
        this.users=data.data;
      });
    };
  

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        id: new FormControl('id'),
        email:new FormControl('email'),
        first_name: new FormControl('first_name'),
        last_name:new FormControl('last_name'),
        avatar: new FormControl('avatar')

      },
    );
    this.getUsers();
  }
  addUser() {
    this.userservice.addUser(this.userFormGroup.value).subscribe(data => {
      this.user = data;
      console.log(this.user);
      this.users.push(data);
    });
    
   }

}
