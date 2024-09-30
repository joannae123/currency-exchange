import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css',
})
export class CurrencyConverterComponent {
  rates: any[] = [];
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  result: number | null = null;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.exchangeRateService.getData().subscribe((data) => {
      this.rates = data[0].rates;
    });
  }

  convert(): void {
    const fromRate = this.rates.find(rate => rate.code === this.fromCurrency)?.mid || 1;
    const toRate = this.rates.find(rate => rate.code === this.toCurrency)?.mid || 1;
    this.result = (this.amount / fromRate) * toRate;
  }

}
