import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {UsersListComponent} from "./components/users-list/users-list.component";
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersListComponent, canActivate: [AuthenticationGuard] },
  { path: 'user-details/:id', component: UserDetailComponent, canActivate: [AuthenticationGuard] },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
