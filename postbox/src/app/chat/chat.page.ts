import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from './chat.service';
import io from 'socket.io-client';

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
    this.chatList = [];
    this.activeRoute.queryParams.subscribe(params => {
      this.reciever = params;
      this.getChat();
    });
    const socket = io('http://localhost:3001/');
    socket.on('con', data => {
      console.log(data);
    });
    socket.on('msg', data => {
      this.chatList.push(data);
      this.message = '';
    });
  }

  Submit() {
    this.chatService.postMessage({
      mobileNumber: this.reciever.mobileNumber,
      id: this.reciever._id,
      message: this.message
    }).subscribe(success => {
    }, error => {
      console.log(error);
    })
  }

  getChat() {
    this.chatService.getChat({mobileNumber: this.reciever.mobileNumber}).subscribe(
      success => {
        this.chatList = success;
      }, error => {
        console.log(error);
      }
    )
  }

}
