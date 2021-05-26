import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private months: String[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor() {}

  getDate = (timestamp, day = true, month = true, year = true) => {
    let date = new Date(timestamp);
    let fullDate = '';
    if (month) {
      fullDate += this.months[date.getMonth()] + ' ';
    }
    if (day) {
      fullDate += date.getDate() + ', ';
    }
    if (year) {
      fullDate += date.getFullYear();
    }
    fullDate = fullDate.trim();
    return fullDate;
  };

  getTime = (timestamp) => {
    let date = new Date(timestamp);
    let hour = date.getHours() <= 12 ? date.getHours() : date.getHours() % 12;
    let partOfDay = this.getDayHalf(timestamp);
    let time = hour + ':' + date.getMinutes() + ' ' + partOfDay;
    if (time === NaN + ':' + NaN + ' PM' || time === NaN + ':' + NaN + ' AM') {
      time = '';
    }
    return time;
  };

  getDayHalf = (timestamp) => {
    let date = new Date(timestamp);
    return date.getHours() < 12 ? 'AM' : 'PM';
  };

  timestampToDate = (timestamp) => {
    return new Date(timestamp);
  };
}
