import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainFormComponent } from "./main-form/main-form.component";
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainFormComponent, CurrencyConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency-exchange';
}
