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

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.homeService.getDetails().subscribe(response => {
      this.friends = response.friends;
      console.log(this.friends);
    }, error => {
      console.log(error);
    });
  }

  openChat(friend: any) {
    console.log('friend', friend);
    this.router.navigate(['/chat'], { queryParams:  friend  });
  }

}
