import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
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
  @ViewChild('touristChatApp') private touristChatAppContainer: ElementRef;

  userChats$;
  currentChat: string;
  guides$;

  constructor(public auth: AuthService, public cs: ChatService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
    this.guides$ = this.cs.getGuideList();

    console.log(this.guides$);
    console.log(this.userChats$);
  }

  openChat(chatId) {
    console.log(chatId);
    this.currentChat = chatId;
  }

  createChat(guideId) {
    this.cs.create(guideId).then(res => {
      this.currentChat = res;
    });
  }

  scrollToBottom($event) {
    console.log('scroll');
    try {
      setTimeout(() => {
        // this.touristChatAppContainer.nativeElement.scrollTop = this.touristChatAppContainer.nativeElement.scrollHeight;
        this.touristChatAppContainer.nativeElement.scrollTo({
          left: 0,
          top: this.touristChatAppContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    } catch (err) {
      console.log(err);
    }
  }


}
