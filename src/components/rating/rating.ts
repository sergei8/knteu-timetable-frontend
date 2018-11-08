import {Component} from '@angular/core';
import {Nav} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {SharedObjects} from '../../providers/shared-data/shared-data';
import {AlertController} from 'ionic-angular';

// import {RatingStarsComponent} from '../rating-stars/rating-stars';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  // teacher: any;
  details: object;
  img_url: string;
  showAvatar: boolean; // не виводіт аватар препода, если нет фотки
  last: string; // фамілія
  first: string; // імя
  middle: string; // отчество
  teacherRatingList: object;
  settedRate: number = 0; // выбранный рейт

  constructor(private sharedObjects: SharedObjects,
              public nav: Nav, public navParams: NavParams,
              private alert: AlertController) {

    this
      .showAvatar = true;

    this
      .details = navParams.get('details');
    // получіть адрес фоткі
    try {
      this
        .img_url = this.details['img_url'];
    }

    catch {
      this.showAvatar = false;
    }
    if (!this.img_url) {
      this.showAvatar = false
    }
// распарсіть ФІО
    const name = this.details['name'].split(' ');
    this.last = name[0];
    this.first = name[1];
    this.middle = name[2];

    this.teacherRatingList = this.sharedObjects.teacherRatesList;
  }

  acceptClicked() {
    let confirm = this.alert.create({
      message: 'Дякуемо! Вашу думку враховано',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ок',
          cssClass: 'alertButton',
          handler: () => {
            this.nav.pop().then();
          }
        }
      ]
    });
    confirm.present().then();


  }
}
