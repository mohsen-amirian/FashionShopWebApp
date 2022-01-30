import {Injectable, EventEmitter, Output} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FashionShopBaseService} from "./fashion-shop-base.service";
import { UserModel } from "../models/user.model";

@Injectable()

export class AuthenticationService extends FashionShopBaseService{

  private currentUser!: UserModel;

  constructor(private http: HttpClient) {
    super();
  }

  public login(email: string, password: string): Promise<any> {
    return new Promise<void>(
      (resolve, reject) => {
        this.http.post(this.serviceUrl + '/api/login', {email: email, password: password})
          .subscribe(
            (res) => {
              this.setSession(res);
              this.setCurrentUser(email);
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
      }
    );
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
  }

  private setCurrentUser(email: string) {
    this.currentUser = {
      email: email,
      first_name: 'Mohsen',
      last_name: 'Amirian'
    };

    localStorage.setItem('user', JSON.stringify(this.currentUser));
  }

  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    window.location.href = '/';
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }

  public isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  public getCurrentUser(): UserModel {
    if(this.currentUser) {
      return this.currentUser;
    } else {
      let user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
  }
}
