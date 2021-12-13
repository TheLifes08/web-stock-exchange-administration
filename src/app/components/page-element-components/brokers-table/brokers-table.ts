import { Component, OnInit } from '@angular/core';

import { BrokerService } from "../../../services/broker-service";
import { Broker } from "../../../classes/Broker";
import {Response} from "../../../classes/Response";

@Component({
  selector: 'brokers-table',
  templateUrl: './brokers-table.html',
  providers: [BrokerService],
  styleUrls: ['../../../app.component.css']
})
export class BrokersTable implements OnInit {
  brokers: Broker[] = [];
  isCorrect: boolean = true;

  constructor(private service: BrokerService) {}

  ngOnInit(): void {
    this.service.getBrokers().subscribe(
      (data: Object) => this.brokers = <Broker[]>((<Response>(data)).data)
    );
  }

  deleteBroker(index: number): void {
    this.brokers.splice(index, 1);
  }

  addBroker(): void {
    this.brokers.push(new Broker("", "", 0));
  }

  saveChanges(): void {
    this.isCorrect = true;

    for (let broker of this.brokers) {
      if (broker.login === "" || broker.name === "" || broker.balance < 0) {
        this.isCorrect = false;
        break;
      }
    }

    if (this.isCorrect) {
      this.service.saveBrokers(this.brokers);
      alert("Успешно сохранено!");
    }
  }
}
