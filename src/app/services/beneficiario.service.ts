import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../interfaces/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {
  Servidor = "http://localhost:8080/api"
  constructor(private servicios: HttpClient) {
   }
   getbeneficiario():Observable<any>{
    return this.servicios.get(`${this.Servidor}/beneficiario/mostrarbeneficiario`);
   }

   createbeneficiario(beneficiario:Beneficiario){
    return this.servicios.post(`${this.Servidor}/beneficiario/createbeneficiario`, beneficiario);
   }

   updatebeneficiario(beneficiario:Beneficiario){
    return this.servicios.put(`${this.Servidor}/beneficiario/createbeneficiario`, beneficiario);
}
  eliminarbeneficiario(nmid:number){
  return this.servicios.delete<Beneficiario>(`${this.Servidor}/beneficiario/deletebeneficiario/${nmid}`);
}
  gettomador():Observable<any>{
  return this.servicios.get(`${this.Servidor}/tomador/mostrartomador`);
 }


}
