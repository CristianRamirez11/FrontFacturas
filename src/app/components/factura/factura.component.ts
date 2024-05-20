import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
//import { HttpClientModule } from '@angular/common/http';
import { FacturaService } from '../../services/factura.service';

type Factura = Array<{ numeroDetalle: string; cantidad: number; valorTotal: number; nombreCiudad: string; nombreArticulo: string; numeroFactura: number}>;

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit{
  listaFacturas: Factura = [];

  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private _facturaService: FacturaService
    //private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      fecha: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      cliente: ['', Validators.required],
      cantidad: ['', Validators.required],
      articulo: ['', Validators.required]
    })
   }

  ngOnInit(): void{
    this.obtenerFacturas();
  }

  
  obtenerFacturas() {
    this._facturaService.getListFacturas().subscribe(data => {
      console.log(data);
      this.listaFacturas = data;
    }, error => {
      console.log(error);
    })
  }

  guardarFactura() {

    const factura: any = {
      fecha: this.form.get('fecha')?.value,
      cliente: this.form.get('cliente')?.value,
      cantidad: this.form.get('cantidad')?.value,
      articulo: this.form.get('articulo')?.value,
    }
/*
    if(this.id == undefined) {
      // Agregamos una nueva factura
        this._facturaService.saveFactura(factura).subscribe(data => {
          this.toastr.success('La factura fue registrada con exito!', 'Factura Registrada');
          this.obtenerFacturas();
          this.form.reset();
        }, error => {
          this.toastr.error('Opss.. ocurrio un error','Error')
          console.log(error);
        })
    }else {

      factura.id = this.id;
      // Editamos factura
      this._facturaService.updateFactura(this.id,factura).subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('La factura fue agregada con exito!', 'Factura ingresada');
        this.obtenerFacturas();
      }, error => {
        console.log(error);
      })

    }

   */
  }
/*

  eliminarFactura(id: number) {
    this._facturaService.deleteFactura(id).subscribe(data => {
      this.toastr.error('La Factura fue eliminada con exito!','Factura eliminada');
      this.obtenerFacturas();
    }, error => {
      console.log(error);
    })

  }

  editarFactura(factura: any) {
    this.accion = 'Editar';
    this.id = factura.id;

    this.form.patchValue({
      fecha: factura.fecha,
      cliente: factura.cliente,
      cantidad: factura.cantidad,
      articulo: factura.articulo
    })
  }

*/
}
