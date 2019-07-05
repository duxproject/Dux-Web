import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('guideChatApp') private guideChatAppContainer: ElementRef;

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

  scrollToBottom($event) {
    console.log('scroll');
    try {
      setTimeout(() => {
        // this.touristChatAppContainer.nativeElement.scrollTop = this.touristChatAppContainer.nativeElement.scrollHeight;
        this.guideChatAppContainer.nativeElement.scrollTo({
          left: 0,
          top: this.guideChatAppContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } catch (err) {
      console.log(err);
    }
  }

}
