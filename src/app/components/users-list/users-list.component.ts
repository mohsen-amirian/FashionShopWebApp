import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../models/user.model";
import { UsersListOutputModel } from 'src/app/models/users-list-output.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {
  readonly USERS_PER_PAGE = 5;

  currentPageNumber: number = 0;
  totalPages: number = 0;
  totalUsers: number = 0;
  showLoading: boolean = false;
  usersList: UserModel[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.showLoading = true;
    this.currentPageNumber +=1;
    this.usersService.getUsersList(1, this.USERS_PER_PAGE).subscribe(
      (res: UsersListOutputModel) => {
        this.totalPages = res.total_pages as number;
        this.usersList = this.usersList.concat(res.data as any);
        this.showLoading = false;
      },
      (error) => {
        console.log(error);
        this.showLoading = false;
      }
    );
  }

  onScroll() {
    if(this.currentPageNumber < this.totalPages) {
      this.showLoading = true;
      this.currentPageNumber += 1;
      this.usersService.getUsersList(this.currentPageNumber, this.USERS_PER_PAGE).subscribe(
        (res: UsersListOutputModel) => {
          this.totalPages = res.total_pages as number;
          this.usersList = this.usersList.concat(res.data as any);
          this.showLoading = false;
        },
        (error) => {
          console.log(error);
          this.showLoading = false;
        }
      );
    }
  }

}
