import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

type Factura = Array<{ numeroDetalle: string; cantidad: number; valorTotal: number; nombreCiudad: string; nombreArticulo: string; numeroFactura: number}>;

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BrowserAnimationsModule, ToastrModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{
  listaFacturas: Factura = [
    { numeroDetalle: '123', cantidad: 12, valorTotal: 123123, nombreCiudad:'dferferf', nombreArticulo:'23234', numeroFactura:123123 },
    { numeroDetalle: '123', cantidad: 12, valorTotal: 123123, nombreCiudad:'dferferf', nombreArticulo:'23234', numeroFactura:123123 },
    { numeroDetalle: '15', cantidad: 6, valorTotal: 90000, nombreCiudad:'Manizales', nombreArticulo:'Mause', numeroFactura:25 },
  ];

  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      fecha: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      cliente: ['', Validators.required],
      cantidad: ['', Validators.required],
      articulo: ['', Validators.required]
    })
   }

  ngOnInit(): void{

  }

  guardarFactura() {

    const factura: any = {
      fecha: this.form.get('fecha')?.value,
      cliente: this.form.get('cliente')?.value,
      cantidad: this.form.get('cantidad')?.value,
      articulo: this.form.get('articulo')?.value,
    }

    if(this.id == undefined) {
      // Agregamos una nueva tarjeta
        this._tarjetaService.saveTarjeta(factura).subscribe(data => {
          this.toastr.success('La tarjeta fue registrada con exito!', 'Tarjeta Registrada');
          this.obtenerTarjetas();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    }else {

      tarjeta.id = this.id;
      // Editamos tarjeta
      this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La factura fue agregada con exito!', 'Factura ingresada');
        this.obtenerTarjetas();
      }, error => {
        console.log(error);
      })

    }

   
  }



}
