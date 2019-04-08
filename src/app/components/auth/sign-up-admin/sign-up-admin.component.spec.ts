import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAdminComponent } from './sign-up-admin.component';

describe('SignUpAdminComponent', () => {
  let component: SignUpAdminComponent;
  let fixture: ComponentFixture<SignUpAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
