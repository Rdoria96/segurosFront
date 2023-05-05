import { Component, OnInit, ViewChild } from '@angular/core';
import { TomadorService } from 'src/app/services/tomador.service';
import { FormGroup, FormControl } from '@angular/forms'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tomador',
  templateUrl: './tomador.component.html',
  styleUrls: ['./tomador.component.scss']
})
export class TomadorComponent implements OnInit {
  formGroup!: FormGroup;
  datosTomador: any;
  displayedColumns: string[] = ['nmid', 'documento', 'tipo_doc', 'nombre', 'apellido', 'direccion', 'telefono', 'ocupacion', 'correo', 'f_naci', 'accion'];

  constructor(private tomService: TomadorService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nmid: new FormControl(),
      documento: new FormControl(),
      tipo_doc: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      ocupacion: new FormControl(),
      correo: new FormControl(),
      f_naci: new FormControl(),
    });
    //Listar Tomadores    
    this.tomService.getTomador().
      subscribe(dato => {
        this.datosTomador = new MatTableDataSource(dato.dato);
        this.datosTomador.paginator = this.paginator;
      });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //Eliminar tomador
  eliminar(id:number) {
    this.tomService.deleteTomador(id)
    .subscribe(dato => {
      this.refrescarDatos();
      alert("Tomador eliminado")
    })
  }

  //Refrescar datos
  refrescarDatos() {
    this.formGroup.reset();
    this.tomService.getTomador().
      subscribe(dato => {
        this.datosTomador = new MatTableDataSource>(dato.dato);
        this.datosTomador.paginator = this.paginator;
      })
  }

  // Guardar Tomador
  saveTomador(form: FormGroup) {
    if (this.formGroup.valid) {

      this.tomService.SaveorUpdate(form.value)
        .subscribe(dato => {
          alert("Tomador guardado");
          this.refrescarDatos();
        });
    } else {
      alert("Formulario invalido")
    }
  }

  //Cargar el formulario

  cargarFormulario(datos:{nmid:any; documento:any; tipo_doc:any; nombre:any; apellido:any; direccion:any; telefono:any;ocupacion:any;correo:any;f_naci:any}){
    this.formGroup.setValue({
      nmid: datos.nmid,
      documento: datos.documento,
      tipo_doc: datos.tipo_doc,
      nombre: datos.nombre,
      apellido: datos.apellido,
      direccion: datos.direccion,
      telefono: datos.telefono,
      ocupacion: datos.ocupacion,
      correo: datos.correo,
      f_naci: datos.f_naci      
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datosTomador.filter = filterValue.trim().toLowerCase();

    if (this.datosTomador.paginator) {
      this.datosTomador.paginator.firstPage();
    }
  }
}
