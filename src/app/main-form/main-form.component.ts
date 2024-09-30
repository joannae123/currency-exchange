import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  standalone: true,
  providers: [],
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit {
  rates: any[] = [];
  selectedDate: string = '';

  constructor(private exchangeRateService: ExchangeRateService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getCurrencyRates();
    this.cdRef.detectChanges();
    };

    getCurrencyRates(): void {
      this.exchangeRateService.getData(this.selectedDate).subscribe((data) => {
        this.rates = data[0].rates;
      });
    }

    onDateChange(): void {
      this.getCurrencyRates();
    }
  }

