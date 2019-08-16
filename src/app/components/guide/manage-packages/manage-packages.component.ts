import { Component, OnInit } from '@angular/core';
import { PackageService } from 'src/app/shared/services/package/package.service';
import { Package } from 'src/app/shared/services/package/package';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ManagePackagesComponent implements OnInit {

  list: Package[];
  constructor(public service:PackageService,
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

  onDelete(id:string){
    if(confirm("Are you sure?")){
      this.firestore.doc('Package/'+id).delete();

    }
  }

}
