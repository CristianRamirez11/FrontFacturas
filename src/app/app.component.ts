import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacturaComponent } from './components/factura/factura.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FacturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Facturacion';
}
