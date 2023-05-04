import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tomador } from '../interfaces/tomador';

@Injectable({
  providedIn: 'root'
})
export class TomadorService {

  constructor(private service: HttpClient) { }
  server = "http://localhost:8080/api";

  getTomador():Observable<any>{
    return this.service.get( `${this.server}/tomador/mostrartomador`);

  }

  deleteTomador(nmid:number):Observable<any>{
    return this.service.delete(`${this.server}/tomador/deletetomador/${nmid}`);
  }

  SaveorUpdate(tom:Tomador){
    return this.service.post<Tomador>(`${this.server}/tomador/createtomador`,tom);


  }
}
