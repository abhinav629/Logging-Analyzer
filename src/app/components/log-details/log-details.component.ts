import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css'],
})
export class LogDetailsComponent implements OnInit {
  @Input()
  flightId;

  @Input()
  type;

  @Input()
  sessionId;

  @Input()
  metaData;

  @Input()
  timestamp;

  @Input()
  actionType;

  date;

  constructor() {}

  ngOnInit(): void {
    this.metaData = JSON.parse(this.metaData);
    this.date = new Date(parseInt(this.timestamp));
  }
}
