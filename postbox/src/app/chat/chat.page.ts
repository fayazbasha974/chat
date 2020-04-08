import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  reciever: any;
  message: string;
  chatList: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    this.message = '';
    this.activeRoute.queryParams.subscribe(params => {
      this.reciever = params;
      this.getChat();
    });
  }

  Submit() {
    this.chatService.postMessage({
      mobileNumber: this.reciever.mobileNumber,
      id: this.reciever._id,
      message: this.message
    }).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })
  }

  getChat() {
    this.chatService.getChat({mobileNumber: this.reciever.mobileNumber}).subscribe(
      success => {
        console.log('success', success);
        this.chatList = success;
      }, error => {
        console.log(error);
      }
    )
  }

}
