import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationService} from "./services/authentication.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FashionAuthInterceptor} from "./inceptors/fashion-auth-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoadingComponent } from './components/loading/loading.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {UsersService} from "./services/users.service";
import {CommonModule} from "@angular/common";
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainTemplateComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    UsersListComponent,
    HomeComponent,
    UserDetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FashionAuthInterceptor, multi: true},
    AuthenticationService,
    AuthenticationGuard,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

