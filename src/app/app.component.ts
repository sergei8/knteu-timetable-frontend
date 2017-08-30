import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomeComponent} from '../components/home/home';
import {TeacherComponent} from '../components/teacher/teacher';
import {StudentComponent} from '../components/student/student';

import {DataProvider} from '../providers/data/data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeComponent;

  timeTable = {};
  appConfig = {};
  timeTableUrl: string;

  // pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private dataProvider: DataProvider) {
    this.initializeApp();
    this.readConfig();
    this.readTimeTable();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openStudent() {
    console.log('student open');
    this.nav.setRoot(StudentComponent);
  }

  openTeacher() {
    console.log('teacher open');
    this.nav.setRoot(TeacherComponent);
  }

  // подписаться на получение файла time-table.json
  readTimeTable() {
    this.dataProvider.getFile(this.timeTableUrl)
      .subscribe(response => {
        this.timeTable = response;
        console.log(this.timeTable);
      });
  }

  readConfig() {
    this.dataProvider.getFile('https://drive.google.com/file/d/0B2RnzkYQbVwTT191LVVaYVdBN0U/view?usp=sharing')
      .subscribe(response => {
        this.timeTableUrl = response;
        console.log(this.timeTableUrl);
      });
  }

}
