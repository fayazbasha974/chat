import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  friends: any;
  total: any;
  isRequests: boolean;

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.homeService.getDetails().subscribe(response => {
      this.total = response;
      this.friends = response.friends;
    }, error => {
      console.log(error);
    });
  }

  openChat(friend: any) {
    if (!this.isRequests) {
      this.router.navigate(['/chat'], { queryParams:  friend  });
    } else {
      this.homeService.acceptRequest({id: friend._id}).subscribe(success => {
        console.log(success);
      }, error => {
        console.log(error);
      });
    }
  }

  findFriend() {
    this.router.navigate(['/find-friend']);
  }

  showRequests() {
    this.isRequests = true;
    this.friends = this.total.friendRequests;
  }

}
