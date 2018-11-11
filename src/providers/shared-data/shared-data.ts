//TODO: перед установкой неового релиза включить логгироваие

import {Injectable} from '@angular/core';

@Injectable()
export class SharedObjects {
  allTimeTable: object;
  WeekDayPara: object;
  weekNames: string[];
  dayNamesList: string[];
  paraNamberList: string[];
  globalParams: object;
  stopLogging: boolean;
  isConnected = true;  // наличие интернета
  teacherRate: object;  // ВСЕ рейты текущего препода
  teacherRatesList: number[]; // массив с актуальными рейтами препода
  currentUserDeviceId: string;
  teacherInfo = {
    teacherName: '',
    newTeacher: false,
    newUserId: false,
    rateList: {}
  };

  constructor() {
    this.globalParams = {};
    this.allTimeTable = {};

    /* Для отладки - не использовать логирование */
    this.stopLogging = true;
    /* ----------------------------------------- */

    this.WeekDayPara = {
      'Перший тиждень': {
        'Понеділок': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Вівторок': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Середа': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Четвер': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'П\'ятниця': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Субота': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []}
      },
      'Другий тиждень': {
        'Понеділок': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Вівторок': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Середа': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Четвер': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'П\'ятниця': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []},
        'Субота': {'1': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': []}
      }
    };
    this.weekNames = ['Перший тиждень', 'Другий тиждень'];
    this.dayNamesList = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];
    this.paraNamberList = ['1', '2', '3', '4', '5', '6', '7'];
  }

}
