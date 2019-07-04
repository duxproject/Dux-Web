import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ChatService } from '../../../shared/services/chat.service';

@Component({
  selector: 'app-guide-chat',
  templateUrl: './guide-chat.component.html',
  styleUrls: [
    '../../../../assets/css/material-dashboard.min.css',
    'guide-chat.component.css'
]
})
export class GuideChatComponent implements OnInit {
  userChats$;
  currentChat = 'V9ScGJWPjybqM1V4Sjof';

  constructor(public auth: AuthService, public cs: ChatService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }

  openChat(chatId) {
    console.log(chatId);
    this.currentChat = chatId;
  }

}
