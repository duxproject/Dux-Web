import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristsComponent } from './tourists.component';

describe('TouristsComponent', () => {
  let component: TouristsComponent;
  let fixture: ComponentFixture<TouristsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
