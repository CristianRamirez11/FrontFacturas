import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Factura = Array<{ numeroDetalle: string; cantidad: number; valorTotal: number; nombreCiudad: string; nombreArticulo: string; numeroFactura: number}>;

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{
  listaFacturas: Factura = [
    { numeroDetalle: '123', cantidad: 12, valorTotal: 123123, nombreCiudad:'dferferf', nombreArticulo:'23234', numeroFactura:123123 },
    { numeroDetalle: '123', cantidad: 12, valorTotal: 123123, nombreCiudad:'dferferf', nombreArticulo:'23234', numeroFactura:123123 },
    { numeroDetalle: '15', cantidad: 6, valorTotal: 90000, nombreCiudad:'Manizales', nombreArticulo:'Mause', numeroFactura:25 },
  ];

  constructor() {}

  ngOnInit(): void{

  }
}
