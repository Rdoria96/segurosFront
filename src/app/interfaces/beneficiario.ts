import { Tomador } from "./tomador";
export interface Beneficiario {
  nmid:number,
  tipo_doc:string,
  documento:string,
  nombre:string,
  apellido:string,
  f_naci:Date,
  parentezco:string,
  ocupacion:string,
  direccion:string,
  telefono:string,
  correo:string,
  porcentaje_afi:number,
  nombre_banco:string,
  numero_cuenta:string,
  documento_tom:string;
  tomador:Tomador
}
