export interface GeoPoint{
    latitude?: string;
    longitude?: string;
}

export interface Location {
    id?: string;
    locationName?: string;
    description?: string;
    loc?: GeoPoint;
    verified?: boolean;
 }