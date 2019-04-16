import { Component, OnInit, Input } from "@angular/core";
import { GeocodingService } from "../geocoding.service";
import { Location } from "../location";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.css"]
})
export class NavigatorComponent implements OnInit {
  @Input() address: string;

  constructor(
    private geocoder: GeocodingService,
    private snackBar: MatSnackBar
  ) {
    this.address = "";
  }

  ngOnInit() {
  }

  goto(address: string) {
    if (!address) {
      return;
    }

    this.geocoder.geocode(address).subscribe(
      (location: Location) => {
        this.address = location.address;
      },
      err => {
        this.snackBar.open(err.message, "OK", {
          duration: 5000
        });
      }
    );
  }
}
