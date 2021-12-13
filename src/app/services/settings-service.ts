import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Settings } from "../classes/Settings";

@Injectable()
export class SettingsService {
  private url: string = "http://localhost:5010/settings";

  constructor(private http: HttpClient) {}

  getSettings() {
    return this.http.get(this.url);
  }

  saveSettings(settings: Settings) {
    this.http
      .post(this.url, settings)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
