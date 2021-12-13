import { Component, OnInit } from '@angular/core';

import { StockService } from "../../../services/stock-service";
import { Stock } from "../../../classes/Stock";
import { Response } from "../../../classes/Response";

@Component({
  selector: 'stocks-table',
  templateUrl: './stocks-table.html',
  providers: [StockService],
  styleUrls: ['../../../app.component.css']
})
export class StocksTable implements OnInit {
  stocks: Stock[] = [];
  isCorrect: boolean = true;
  value: number = 0;

  private onChange: (v: number) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private service: StockService) {}

  ngOnInit(): void {
    this.service.getStocks().subscribe(
      (data: Object) => this.stocks = <Stock[]>((<Response>(data)).data)
    );
  }

  deleteStock(index: number): void {
    this.stocks.splice(index, 1);
  }

  addStock(): void {
    this.stocks.push(new Stock("", 0, 0, 0, 0));
  }

  saveChanges(): void {
    this.isCorrect = true;

    for (let stock of this.stocks) {
      if (stock.name === "" || stock.startPrice < 0 || stock.maximumStep < 0 || stock.number < 0) {
        this.isCorrect = false;
        break;
      }
    }

    if (this.isCorrect) {
      this.service.saveStocks(this.stocks);
      alert("Успешно сохранено!");
    }
  }

  registerOnChange(func: (v: number) => void): void {
    this.onChange = func;
  }

  registerOnTouched(func: () => void): void {
    this.onTouched = func;
  }

  updateValue(value: number): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
