import { Tomador } from "./tomador";

export interface Siniestro {
  nmid: number;
  tipo_siniestro: string;
  f_siniestro: string,
  lugar: string;
  nmid_tomador: Tomador
  documento: string;
  tipo_doc: string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  ocupacion: string;
  correo: string;
  f_naci: string

}
