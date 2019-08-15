import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { PackageService } from 'src/app/shared/services/package/package.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class AddPackagesComponent implements OnInit {

  constructor(public service: PackageService,
    private firestore:AngularFirestore,
    public authService:AuthService) { }

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
    lastName: '',
    ownerId: '',
    packageName: '',
    duration:'',
    description: '',
    price: '',
    }
  }

  onSubmit(form: NgForm){
    // data -> variable used to store the infor of a single tour
    let data = Object.assign({},form.value);

    delete data.id;
    if(form.value.id == null){
      // inputting the data into the firestore db
      this.firestore.collection('package').add(data);
    }else{
      this.firestore.doc('package/' + form.value.id).update(data);
    }
    
    // after submitting the form should reset
    this.resetForm(form);
  }

}
