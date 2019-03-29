import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpGuideComponent } from './sign-up-guide.component';

describe('SignUpGuideComponent', () => {
  let component: SignUpGuideComponent;
  let fixture: ComponentFixture<SignUpGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
