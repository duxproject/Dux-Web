import { Component, OnInit } from '@angular/core';
import { TouristService } from 'src/app/shared/services/tourist/tourist.service';
import { Tourist } from 'src/app/shared/services/tourist/tourist.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  list: Tourist[];
  constructor(public service:TouristService,
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
