import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Siniestro } from '../interfaces/siniestro';
import { SiniestroComponent } from '../components/siniestro/siniestro.component';

@Injectable({
  providedIn: 'root'
})
export class SiniestroService {

  constructor(private servicio: HttpClient) { }
  servidor = 'http://localhost:8080/api';

  getSiniestros(): Observable<any> {
    return this.servicio.get(`${this.servidor}/siniestro/siniestros`);
  }

  getTomadores(): Observable<any> {
    return this.servicio.get(`${this.servidor}/tomador/mostrartomador`);
  }

  create(control: Siniestro) {
    return this.servicio.post<Siniestro>(`${this.servidor}/siniestro/createsiniestro`, control);
  }


  eliminar(control: Siniestro){
    return this.servicio.delete<Siniestro>(`${this.servidor}/siniestro/deletesiniestro/${control.nmid}`);
  }
}
