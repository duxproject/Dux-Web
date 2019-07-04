import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-tourist-chat',
  templateUrl: './tourist-chat.component.html',
  styleUrls: [
    './tourist-chat.component.css',
    '../../../../assets/css/material-dashboard.min.css'
  ]
})
export class TouristChatComponent implements OnInit {
  userChats$;
  currentChat: string;

  constructor(public auth: AuthService, public cs: ChatService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }

  openChat(chatId) {
    console.log(chatId);
    this.currentChat = chatId;
  }


}
