import { Injectable } from '@angular/core';
import { Tourist } from './tourist.model';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  formData: Tourist;

  constructor() { }
}
