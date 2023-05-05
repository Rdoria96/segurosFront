import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private service: HttpClient) { }
  server = 'http://localhost:8080/api';


  getPagos(): Observable<any> {
    return this.service.get(`${this.server}/pagos/mostarpagos`);
  }

  liquidarPago(documento: string, fecha: String) {
    const params = {documento: documento, fecha: fecha};
    return this.service.post(`${this.server}/pagos/generate`,params);
  }

  filtrarPago(documento: String, año: number, mes: number): Observable<any> {
    return this.service.get(`${this.server}/pagos/pagosfiltrados/${año},${mes},${documento}`);
  }
}
