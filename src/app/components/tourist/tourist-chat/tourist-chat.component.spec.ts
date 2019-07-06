import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristChatComponent } from './tourist-chat.component';

describe('TouristChatComponent', () => {
  let component: TouristChatComponent;
  let fixture: ComponentFixture<TouristChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
