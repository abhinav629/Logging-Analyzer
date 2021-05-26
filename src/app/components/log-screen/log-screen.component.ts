import { AnalysisService } from "./../../services/analysis/analysis-service.service";
import { Component, OnInit } from "@angular/core";
import { TimeService } from "src/app/services/time/time.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-log-screen",
  templateUrl: "./log-screen.component.html",
  styleUrls: ["./log-screen.component.css"],
})
export class LogScreenComponent implements OnInit {
  newFlightForm: FormGroup;
  newUserForm: FormGroup;

  constructor(
    private analysisService: AnalysisService,
    private dateService: TimeService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.newFlightForm = this.fb.group({
      flightNumber: ["", [Validators.required, Validators.min(1)]],
      legNumber: ["", [Validators.required, Validators.min(1)]],
      flightDate: ["", [Validators.required]],
      /** 1258
       * 46775
       * 2021-08-21
       */
    });

    this.newUserForm = this.fb.group({
      userId: ["", [Validators.required, Validators.min(1)]],
      //35869
    });
  }

  analysisLogs;
  date;
  time;
  isFlightView = false;
  analysisLogsBasedOnFlightFilters;

  ngOnInit(): void {
    console.log(this.analysisLogs);
  }

  findSessionsForUser = () => {
    if (this.newUserForm.valid) {
      this.newUserForm.value.userId = parseInt(this.newUserForm.value.userId);
      this.analysisService
        .getSessionBasedAnalysisLogsForUser(this.newUserForm.value.userId)
        .subscribe((logs) => {
          this.analysisLogs = logs;
        });
      //console.log(this.sessions);
    } else {
      this.snackbar.open(
        "There are validation errors. Please fill all the fields",
        "",
        {
          duration: 5000,
        }
      );
    }
  };

  findFlights = () => {
    if (this.newFlightForm.valid) {
      this.analysisService
        .getAnalysisLogsForFlight(this.newFlightForm.value)
        .subscribe((flightLogs) => {
          this.analysisLogsBasedOnFlightFilters = flightLogs;
          console.log(flightLogs);
        });
      //console.log(this.analysisLogsBasedOnFlightFilters);
    } else {
      this.snackbar.open(
        "There are validation errors. Please fill all the fields",
        "",
        {
          duration: 5000,
        }
      );
    }
  };
}
