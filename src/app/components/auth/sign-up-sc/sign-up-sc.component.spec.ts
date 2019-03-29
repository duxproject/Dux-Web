import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpScComponent } from './sign-up-sc.component';

describe('SignUpScComponent', () => {
  let component: SignUpScComponent;
  let fixture: ComponentFixture<SignUpScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
