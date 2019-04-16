import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MapoComponent } from "./map.component";

describe("MapComponent", () => {
  let component: MapoComponent;
  let fixture: ComponentFixture<MapoComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MapoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
