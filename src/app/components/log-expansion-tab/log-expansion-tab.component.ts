import { AnalysisService } from './../../services/analysis/analysis-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time/time.service';

@Component({
  selector: 'app-log-expansion-tab',
  templateUrl: './log-expansion-tab.component.html',
  styleUrls: ['./log-expansion-tab.component.css'],
})
export class LogExpansionTabComponent implements OnInit {
  @Input()
  analysisLog;

  logDetails;
  date;
  time;

  @Input()
  iconClass;

  constructor(
    private analysisService: AnalysisService,
    private dateService: TimeService
  ) {

  }

  ngOnInit(): void {
    if (this.analysisLog) {
      this.logDetails = JSON.parse(this.analysisLog);
    }
    if (!this.logDetails) {
      this.logDetails = {};
    }
    this.time = this.dateService.getTime(this.logDetails?.actionTimestamp);
    this.date = this.dateService.getDate(this.logDetails?.actionTimestamp);
  }
}
