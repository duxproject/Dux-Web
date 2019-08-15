import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-view-guide-profile',
  templateUrl: './view-guide-profile.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewGuideProfileComponent implements OnInit {

  imgSrc : string ;
  selectedImage : any = null;
  isSubmitted : boolean ;

  formTemplate = new FormGroup({
    imageUrl: new FormControl('',Validators.required)
  })

  constructor(
    private storage:AngularFireStorage,
    public authService:AuthService) { }

  ngOnInit() {
    this.resetImgUploadForm();
  }

  showPreview(event: any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];

    }else{
      this.imgSrc = '../../../../assets/img/cover.jpg';
      this.selectedImage = null;
    }
  }

  onSubmitImg(formValue){
    this.isSubmitted = true;
    if(this.formTemplate.valid){
      var filePath = `profileImg/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url)=>{
            formValue['imageUrl'] = url; 
            this.resetImgUploadForm();
          })
        })
      ).subscribe();
    }

  }

  get formControls(){
    return this.formTemplate['controls'];
  }

  // after submitting resetting the form must be done
  resetImgUploadForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl:''
    });
    this.imgSrc = '../../../../assets/img/cover.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  

}
