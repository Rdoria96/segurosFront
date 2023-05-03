import { Component, OnInit } from '@angular/core';
import { ReaseguradoraService } from 'src/app/services/reaseguradora.service';
import { FormGroup, FormControl } from '@angular/forms'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-reaseguradora',
  templateUrl: './reaseguradora.component.html',
  styleUrls: ['./reaseguradora.component.scss']
})

export class ReaseguradoraComponent implements OnInit {
  formGroup!: FormGroup; 
  datosReaseguradora:any;

  displayedColumns: string[] = ['nmid', 'nit', 'razon_social', 'monto_seguro','porcentaje_cober','accion'];

  constructor(private reaService:ReaseguradoraService) { }
//Metodo automatico
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nit: new FormControl(),
      razon_social: new FormControl(),
      monto_seguro: new FormControl(),
      porcentaje_cober: new FormControl(),
    });

    //Listar Reaseguradoras  
    this.reaService.getReaseguradora().
    subscribe(dato =>{
      this.datosReaseguradora = dato.dato;
  });
  }

  //Eliminar reaseguradora
  eliminar(id:number){
    this.reaService.deleteReaseguradora(id)
    .subscribe(dato=>{
      this.refrescarDatos();
      alert("Reaseguradora eliminada");
    });

  }

  //Refrescar datos
  refrescarDatos(){
    this.formGroup.reset();
    this.reaService.getReaseguradora().
    subscribe(dato =>{
      this.datosReaseguradora = dato.dato;
  });



  }
  

 

}
