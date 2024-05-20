import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private myAppUrl = 'https://localhost:44364/'; // hace referencia a la url del proyecto
  private myApiUrl = 'api/factura/'
  private myApiUrlDetalleFacturaPorCiudad = 'DetalleFacturaPorCiudad';

  constructor(private http: HttpClient) { }

  getListFacturas(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + this.myApiUrlDetalleFacturaPorCiudad);
  }
/*
  deleteFactura(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveFactura(factura: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, factura);
  }

  updateFactura(id: number, factura: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, factura);
  }
*/
}
