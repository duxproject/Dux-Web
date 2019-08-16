import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Params } from '@angular/router';
import { StarService } from '../../../shared/services/star/star.service';
import { Star } from '../../../shared/services/star/star';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
=======
import { AuthService } from 'src/app/shared/services/auth.service';
>>>>>>> 1942acb2f4b66ec55f5c952596eb09f597d0c9fe

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['../../../../assets/css/material-dashboard.min.css']
})
export class ViewRatingComponent implements OnInit {

<<<<<<< HEAD
  title = "Dux | View Ratings";
  id="";
  stars: Observable<any>;
  avgRating: Observable<any>;

  constructor(private route: ActivatedRoute, public starService: StarService, public authService: AuthService) { }

  getStr() {
    const stars = JSON.parse(localStorage.getItem('stars'));
    this.stars = stars; 
  }
=======
  constructor(public authService:AuthService) { }
>>>>>>> 1942acb2f4b66ec55f5c952596eb09f597d0c9fe

  ngOnInit() {

    const user = JSON.parse(localStorage.getItem('user'));
    this.id = user.uid;

    this.stars = this.starService.getStars(this.id)
    this.avgRating = this.stars.pipe(map(arr => {
      const ratings = arr.map(v => v.value)
      return ratings.length ? ratings.reduce((total, val) => total + val) / arr.length : 'not reviewed'
    }));

  }


}
