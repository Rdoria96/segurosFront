import { Reaseguradora } from "./reaseguradora";
import { Tomador } from "./tomador"

export interface Seguros {
  nmid: number,
  tipo_seguro: string,
  valor: string,
  descripcion: string,
  f_inicial: Date,
  f_final: Date,
  documento: string
  razon_social:string
  tomador: Tomador,
  reaseguradora: Reaseguradora


}


