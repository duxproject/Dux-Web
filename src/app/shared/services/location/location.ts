export interface GeoPoint{
    latitude?: number;
    longitude?: number;
}

export interface Location {
    id?: string;
    district?: string;
    locationName?: string;
    description?: string;
    photoUrl1?: string;
    photoUrl2?: string;
    photoUrl3?: string;
    photoUrl4?: string;
    photoUrl5?: string;
    videoUrl?: string;
    loc?: GeoPoint;
    verified?: boolean;
 }