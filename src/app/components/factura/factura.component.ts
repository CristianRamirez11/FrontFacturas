import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{
  listaFacturas: any[] = [
    { NumeroDetalle: '123', Cantidad: '12', ValorTotal: '123123', NombreCiudad:'dferferf', NombreArticulo:'23234', NumeroFactura:'123123' },
    { NumeroDetalle: '123', Cantidad: '12', ValorTotal: '123123', NombreCiudad:'dferferf', NombreArticulo:'23234', NumeroFactura:'123123' },
  ];

  constructor() {}

  ngOnInit(): void{

  }
}
