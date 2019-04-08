import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagesComponent } from './add-packages.component';

describe('AddPackagesComponent', () => {
  let component: AddPackagesComponent;
  let fixture: ComponentFixture<AddPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
