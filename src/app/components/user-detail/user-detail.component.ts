import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  user!: UserModel;
  showLoading: boolean = false;
  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.showLoading = true;
    let userId = this.route.snapshot.params['id'];
    this.usersService.getUserDetail(userId).subscribe(
      (res: any) => {
        this.user = res.data;
        this.showLoading = false;
      },
      () => {
        this.router.navigate(['404']);
        this.showLoading = false;
      }
    )
  }

}
