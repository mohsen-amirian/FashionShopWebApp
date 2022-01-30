import {Injectable} from "@angular/core";
import {FashionShopBaseService} from "./fashion-shop-base.service";
import {HttpClient} from "@angular/common/http";
import {UsersListOutputModel} from "../models/users-list-output.model";

@Injectable()
export class UsersService extends FashionShopBaseService{
  constructor(private http: HttpClient) {
    super();
  }

  getUsersList(pageNumber: number, itemsPerPage: number) {
    return this.http.get<UsersListOutputModel>(this.serviceUrl + `/api/users?page=${pageNumber}&per_page=${itemsPerPage}&delay=3`);
  }

  getUserDetail(userId: number) {
    return this.http.get(this.serviceUrl + `/api/users/${userId}?delay=3`);
  }
}
