import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private _chatId: string;

  @Input() set chatId(value: string) {
    this._chatId = value;
    this.ngOnInit();
  }

  @Output() messageEvent = new EventEmitter<boolean>();

  chat$: Observable<any>;
  newMsg: string;
  isTopicEditing: boolean;
  topic: string;

  @ViewChild('topicInput') inputfield: ElementRef;

  constructor(
    public cs: ChatService,
    private route: ActivatedRoute,
    public auth: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // const chatId = this.route.snapshot.paramMap.get('id');
    const source = this.cs.get(this._chatId);
    this.chat$ = this.cs.joinUsers(source); // .pipe(tap(v => this.scrollBottom(v)));
    if (this.chat$) {
      this.scrollBottom();
    }
  }

  submit(chatId) {
    if (!this.newMsg) {
      return alert('you need to enter something');
    }
    this.cs.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
    this.scrollBottom();
  }

  submitTopic(chatId) {
    if (!this.topic) {
      return alert('you need to enter a topic');
    }
    this.cs.updateTopic(chatId, this.topic);
    this.isTopicEditing = false;
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }

  private scrollBottom() {
    // setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
    this.messageEvent.emit(true);
  }

  topicEditable() {
    this.isTopicEditing = true;
    this.cdr.detectChanges();
    this.inputfield.nativeElement.focus();
  }

  topicNonEditable() {
    console.log('focus out');
    this.topic = '';
    this.isTopicEditing = false;
  }

}
