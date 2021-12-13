export class Stock {
  constructor(public name: string,
              public startPrice: number,
              public maximumStep: number,
              public number: number,
              public changeType: number) {}
}
