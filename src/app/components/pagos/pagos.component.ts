import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord } from '@angular/forms';
import { PagosService } from 'src/app/services/pagos.service';

export interface Pagos {
  f_pagos: String;
  cuotas: number;
  valor_cmes: number;
  nmid_seguro: number;
}

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
  formGroup!: FormGroup;
  datosPagos: any;
  displayedColumns: string[] = ['documento','nombretom','f_pago', 'cuotas', 'valor_cmes', 'nmid_seguro', 'accion'];
  years = Array.from({length: 31}, (_, i) => 2000 + i); // Arreglo con años del 2000 al 2030
  months = [
    { name: 'Enero', value: 1 },
    { name: 'Febrero', value: 2 },
    { name: 'Marzo', value: 3 },
    { name: 'Abril', value: 4 },
    { name: 'Mayo', value: 5 },
    { name: 'Junio', value: 6 },
    { name: 'Julio', value: 7 },
    { name: 'Agosto', value: 8 },
    { name: 'Septiembre', value: 9 },
    { name: 'Octubre', value: 10 },
    { name: 'Noviembre', value: 11 },
    { name: 'Diciembre', value: 12 },
  ];

  constructor(private pagosService: PagosService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      documento1: new FormControl(),
      documento2: new FormControl(),
      fecha: new FormControl(),
      selectedYear: new FormControl(),
      selectedMonth: new FormControl()
    });

    this.pagosService.getPagos()
    .subscribe(dato =>{
      this.datosPagos = dato.dato;
      console.log(dato);
    });
  }

  liquidar(form: FormGroup) {
    let doc = form.get('documento1')?.value;
    let fecha = form.get('fecha')?.value;
    console.log(fecha,doc);
    
    this.pagosService.liquidarPago(doc,fecha)
    .subscribe(dato =>{
      alert("Pago de "+fecha.months+" liqudado");

    })
  }

}
