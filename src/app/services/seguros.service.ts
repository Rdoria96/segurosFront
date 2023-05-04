import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seguros } from '../interfaces/seguros';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  servidor ='http://localhost:8080/api'
  constructor(private servicio: HttpClient) { }

  getseguros():Observable<any>{
    return this.servicio.get(`${this.servidor}/seguros/mostrar_seguros`);
  }

  createseguros(seguros: Seguros){
    return this.servicio.post<Seguros>(`${this.servidor}/seguros`,seguros);
  }

  eliminarseguros(nmid:number){
    return this.servicio.delete<Seguros>(`${this.servidor}/seguros/delete/${nmid}`);
  }


}
