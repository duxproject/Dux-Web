import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Location } from "./location";
import * as L from "leaflet";

import "rxjs/add/operator/map";
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class GeocodingService {
  constructor(private http: HttpClient) {}

  geocode(address: string) {
    const encoded = encodeURIComponent(address);

    return this.http
      .get(
        `https://nominatim.openstreetmap.org/search.php?q=${encoded}&format=jsonv2`
      )
      .map((result: any) => {
        if (result.length === 0) {
          throw new Error(`Unable to geocode address: ${address}`);
        }

        const best = result[0];
        const location = new Location();
        location.address = best.display_name;
        location.latlng = L.latLng(best.lat, best.lon);
        location.viewBounds = L.latLngBounds(
          {
            lat: Number(best.boundingbox[0]),
            lng: Number(best.boundingbox[2])
          },
          {
            lat: Number(best.boundingbox[1]),
            lng: Number(best.boundingbox[3])
          }
        );
        localStorage.setItem('loc', JSON.stringify(location))
        return location;
      });
  }
}
