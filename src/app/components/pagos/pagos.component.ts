import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormRecord } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { PagosService } from 'src/app/services/pagos.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit{
  formGroup!: FormGroup;
  datosPagos: any;
  displayedColumns: string[] = ['documento','nombretom','f_pago', 'cuotas', 'valor_cmes', 'nmid_seguro'];
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
      this.datosPagos = new MatTableDataSource(dato.dato);
      this.datosPagos!.paginator = this.paginator;
      console.log(dato);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  liquidar(form: FormGroup) {
    let doc = form.get('documento1')?.value;
    let fecha = form.get('fecha')?.value;
    
    this.pagosService.liquidarPago(doc,fecha)
    .subscribe(dato =>{
      this.refresh();
      alert("Pago Liquidado");

    })
  }

  filtrar(form: FormGroup) {
    let doc = form.get('documento2')?.value;
    let año = form.get('selectedYear')?.value;
    let mes = form.get('selectedMonth')?.value;
    console.log(mes, año);
    

    this.pagosService.filtrarPago(doc,año,mes)
    .subscribe(datos =>{
      this.datosPagos = datos.dato;
    });
  }

  refresh() {
    this.formGroup.reset();
    this.pagosService.getPagos()
    .subscribe(dato =>{
      this.datosPagos = new MatTableDataSource(dato.dato);
      this.datosPagos!.paginator = this.paginator;
    });
  }


}
