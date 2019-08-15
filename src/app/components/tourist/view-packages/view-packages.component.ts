import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/shared/services/package/package.service';
import { Package } from 'src/app/shared/services/package/package';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewPackagesComponent implements OnInit {

  list: Package[];
  constructor(public service:PackageService,
    public authService:AuthService,
    public firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getPackage().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() // this returns the details of a tour
        } as Package;

      })

    });
  }

  onEdit(tr:Package){
    this.service.formData =Object.assign({},tr);
  }

  onSelect(id:string){
    if(confirm("Are you pretty sure?")){
      this.firestore.doc('tour/'+id).delete();

    }
  }

}
