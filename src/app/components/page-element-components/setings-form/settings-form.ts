import { Component } from "@angular/core";

import { SettingsService } from "../../../services/settings-service";
import { Settings } from "../../../classes/Settings";
import { Response } from "../../../classes/Response";

@Component({
  selector: 'settings-form',
  templateUrl: './settings-form.html',
  providers: [SettingsService],
  styleUrls: ['../../../app.component.css']
})
export class SettingsForm {
  settings: Settings;
  isCorrect: boolean = true;

  constructor(private service: SettingsService) {
    this.settings = new Settings("", "", 1000);
  }

  ngOnInit(): void {
    this.service.getSettings().subscribe(
      (data: Object) => this.settings = <Settings>((<Response>(data)).data)
    );
  }

  saveChanges(): void {
    this.isCorrect = true;

    if (this.settings.priceCalculateInterval <= 0 || this.settings.startDatetime === "" || this.settings.endDatetime === "") {
      this.isCorrect = false;
    } else {
      this.service.saveSettings(this.settings);
      alert("Успешно сохранено!");
    }
  }
}
