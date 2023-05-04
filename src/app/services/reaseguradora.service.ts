import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reaseguradora } from '../interfaces/reaseguradora';

@Injectable({
  providedIn: 'root'
})
export class ReaseguradoraService {

  constructor(private service: HttpClient) { }
  server = "http://localhost:8080/api";

  getReaseguradora():Observable<any>{
    return this.service.get( `${this.server}/reaseguradora/mostrarreaseguradora`);

  }

deleteReaseguradora(nmid:number):Observable<any>{
  return this.service.delete(`${this.server}/reaseguradora/deletereaseguradora/${nmid}`);
}


SaveorUpdate(rea:Reaseguradora){
  return this.service.post<Reaseguradora>(`${this.server}/reaseguradora/createreaseguradora`,rea);
  

}


}
