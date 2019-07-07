import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {GetUserComponent} from './get-user/get-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'create', component:CreateUserComponent},
  {path: 'getUser', component:GetUserComponent},
  {path: 'updateUser', component:UpdateUserComponent},
  {path: 'deleteUser', component:DeleteUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
