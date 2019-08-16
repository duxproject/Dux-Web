import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/user/user';
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

  constructor(private storage:AngularFireStorage,
     private firestore:AngularFirestore,
     public router: Router,
     public authService: AuthService) { }

  ngOnInit() {
    this.resetImgUploadForm();

    this.authService.getUser().subscribe(usr => {
      if (usr) {
        localStorage.setItem('user', JSON.stringify(usr));
        this.user.roles.tourist = usr.roles.tourist;
        this.user.displayName = usr.displayName;
        this.user.emailVerified = usr.emailVerified;
        this.user.email = usr.email;
        this.user.uid = usr.uid;
      }
    });
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




  // start of the firebase connection of the form

  user: User = {
    uid: '',
    displayName: '',
    email: '',
    emailVerified: true,
    photoURL: '',
    roles: {
      tourist: true,
    }
  };

  editProfile() {
    
    this.firestore.doc('users/'+this.user.uid).update(this.user);
    console.log(this.user);
    window.alert('Changes Saved!');
    this.router.navigate(['/tour-dashboard']);
  }

  

}
