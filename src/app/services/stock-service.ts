import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Stock } from "../classes/Stock";

@Injectable()
export class StockService {
  private url: string = "http://localhost:5010/stocks";

  constructor(private http: HttpClient) {}

  getStocks() {
    return this.http.get(this.url);
  }

  saveStocks(stocks: Stock[]) {
    this.http
      .post(this.url, stocks)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
