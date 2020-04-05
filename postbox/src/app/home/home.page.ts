import { Component , OnInit} from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  friends: any;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.homeService.getDetails().subscribe(response => {
      this.friends = response.friends;
    }, error => {
      console.log(error);
    });
  }

}
