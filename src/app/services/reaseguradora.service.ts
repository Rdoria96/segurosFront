import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReaseguradoraService {

  servidor ='http://localhost:8080/api'
  constructor(private servicio: HttpClient) { }

  getAll():Observable<any>{
    return this.servicio.get(`${this.servidor}/reaseguradora/mostrarreaseguradora`);
  }
  
}
