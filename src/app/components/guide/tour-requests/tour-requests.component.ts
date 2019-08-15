import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/shared/services/tourist/tourist.service';
import { Tourist } from 'src/app/shared/services/tourist/tourist.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tour-requests',
  templateUrl: './tour-requests.component.html',
  styleUrls: ['./tour-requests.component.css','../../../../assets/css/material-dashboard.min.css']
})

export class TourRequestsComponent implements OnInit {

  list: Tourist[];
  constructor(public service:TouristService,
    public authService:AuthService,
    public firestore:AngularFirestore) { }

  ngOnInit() {
    this.service.getTour().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data() // this returns the details of a tour
        } as Tourist;

      })

    });
  }

  onEdit(tr:Tourist){
    this.service.formData =Object.assign({},tr);
  }

  onDelete(id:string){
    if(confirm("Are you sure?")){
      this.firestore.doc('tour/'+id).delete();

    }
  }

}
