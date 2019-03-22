import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuideProfileComponent } from './view-guide-profile.component';

describe('ViewGuideProfileComponent', () => {
  let component: ViewGuideProfileComponent;
  let fixture: ComponentFixture<ViewGuideProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuideProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuideProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
