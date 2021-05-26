import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AnalysisService {
  constructor(private http: HttpClient) {}

  getSessionBasedAnalysisLogsForUser = (userID) => {
    return this.http.get("api/logs/user/" + userID);
  };

  getAnalysisLogsForFlight = (flightSearchData) => {
    return this.http.get(
      "api/logs/flight?flightNumber=" +
        flightSearchData.flightNumber +
        "&flightDate=" +
        flightSearchData.flightDate +
        "&legNumber=" +
        flightSearchData.legNumber
    );
  };
}
