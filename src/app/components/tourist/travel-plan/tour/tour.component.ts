import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/shared/services/tourist/tourist.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor(public service: TouristService,
    public authService:AuthService,
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
      firstName: '',
      lastName:'',
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
    let data = Object.assign({},form.value);

    delete data.id;
    if(form.value.id == null){
      // inputting the data into the firestore db
      this.firestore.collection('tour').add(data);
    }else{
      this.firestore.doc('tour/' + form.value.id).update(data);
    }
    
    // after submitting the form should reset
    this.resetForm(form);
  }

}
