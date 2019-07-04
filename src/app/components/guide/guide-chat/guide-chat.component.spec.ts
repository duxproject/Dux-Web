import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideChatComponent } from './guide-chat.component';

describe('GuideChatComponent', () => {
  let component: GuideChatComponent;
  let fixture: ComponentFixture<GuideChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
