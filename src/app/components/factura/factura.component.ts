import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';
//import { HttpClientModule } from '@angular/common/http';
import { FacturaService } from '../../services/factura.service';

type Factura = Array<{ numeroDetalle: number; cantidad: number; valorTotal: number; nombreCiudad: string; nombreArticulo: string; numeroFactura: number }>;
@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit {
  listaFacturas: Factura = [];

  form: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private _facturaService: FacturaService
  ) {
    this.form = this.fb.group({
      fecha: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      clienteId: ['', Validators.required],
      cantidad: ['', Validators.required],
      articuloId: ['', Validators.required]
    })
  }

  ngOnInit(): void {
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
      clienteId: this.form.get('clienteId')?.value,
      cantidad: this.form.get('cantidad')?.value,
      articuloId: this.form.get('articuloId')?.value,
    }
    // Agregamos una nueva factura
    this._facturaService.saveFactura(factura).subscribe(data => {
      alert('La factura fue registrada con exito!');
      this.obtenerFacturas();
      this.form.reset();
    }, error => {
      alert('Opss.. ocurrio un error')
      //this.toastr.error('Opss.. ocurrio un error', 'Error')
      console.log(error);
    })
  }

  editarFactura(factura: any) {
    //this.accion = 'Editar';
    this.id = factura.id;

    this.form.patchValue({
      fecha: factura.fecha,
      cliente: factura.cliente,
      cantidad: factura.cantidad,
      articulo: factura.articulo
    })
  }

  eliminarFactura(numeroDetalleFactura: number) {
    this._facturaService.deleteFactura(numeroDetalleFactura).subscribe(data => {
      alert('La Factura fue eliminada con exito!');
      this.obtenerFacturas();
    }, error => {
      console.log(error);
    })

  }

}
