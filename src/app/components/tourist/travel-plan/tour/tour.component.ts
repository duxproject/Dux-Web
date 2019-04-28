import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/shared/services/tourist/tourist.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(private service: TouristService,
    private firestore:AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      fullName: '',
      country: '',
      startDate: '',
      duration: '',
      startLoc: '',
      endLoc: '',
      budget: ''
    }
  }

  onSubmit(form: NgForm){
    // data -> variable used to store the infor of a single tour
    let data = form.value;

    // inputting the data into the firestore db
    this.firestore.collection('users').add(data);

    // after submitting the form should reset
    this.resetForm(form);
  }

}
