import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Broker } from "../classes/Broker";

@Injectable()
export class BrokerService {
  private url: string = "http://localhost:5010/brokers";

  constructor(private http: HttpClient) {}

  getBrokers() {
    return this.http.get(this.url);
  }

  saveBrokers(brokers: Broker[]) {
    this.http
      .post(this.url, brokers)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
