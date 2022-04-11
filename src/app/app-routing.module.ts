import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { EditUserDetailComponent } from './edit-user-detail/edit-user-detail.component';
import { ErrorpageComponent } from './error-page/errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { RestUpdateComponent } from './rest-update/rest-update.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'list',
    canActivate: [AuthGuardService],
    component: RestListComponent,
  },
  {
    component: LoginComponent,
    path: '',
    pathMatch:'full'
  },
  {
    component: RegisterComponent,
    path: 'register',
  },
  {
    component: RestUpdateComponent,
    canActivate: [AuthGuardService],
    path: 'update/:id',
  },
  {
    component: AddRestaurentComponent,
    canActivate: [AuthGuardService],
    path: 'addrestaurent',
  },
  {
    path:"edituser",
    component:EditUserDetailComponent,
    canActivate:[AuthGuardService]
  },
  {
    component: ErrorpageComponent,
    path: '**',
    canDeactivate: [AuthGuardService],
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
