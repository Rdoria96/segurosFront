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

  liquidarPago(doc: string, fecha: Date) {
    const params = {documento: doc, fecha: fecha};
    return this.service.post(`${this.server}/pagos/generate`,params);
    
  }
}
