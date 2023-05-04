import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Siniestro } from 'src/app/interfaces/siniestro';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Subject } from 'rxjs';
import { SiniestroService } from 'src/app/services/siniestro.service';
import { HttpClient } from '@angular/common/http';
import { Tomador } from 'src/app/interfaces/tomador';

@Component({
  selector: 'app-siniestro',
  templateUrl: './siniestro.component.html',
  styleUrls: ['./siniestro.component.scss']
})
export class SiniestroComponent implements OnInit {
  myForm!: FormGroup;
  datosSiniestro: Array<Siniestro> = [];
  datosTomador: any;
  filterPost = '';
  //dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;


  constructor(private fb: FormBuilder, private router: Router, private config: NgbModalConfig, private modalService: NgbModal, private servicioSiniestro: SiniestroService, private http: HttpClient) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid: [''],
      tipo_siniestro: [''],
      f_siniestro:[''],
      lugar:[''],
      tomador:[]

    });

    let arraySiniestro: Array<Siniestro> = [];
    this.servicioSiniestro.getSiniestros().subscribe(datos => {
      this.datosSiniestro = datos.dato;
    });
    let arrayTomador: Array<Tomador> = [];
    this.servicioSiniestro.getTomadores().subscribe(datos => {
      this.datosTomador = datos.dato;
    });
  }


  open(content: any) {
    this.modalService.open(content);
    this.myForm.reset();

  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editar(datos:any) {
    this.myForm.setValue({
      nmid: datos.nmid,
      tipo_siniestro:datos.tipo_siniestro,
      f_siniestro:datos.f_siniestro,
      lugar:datos.lugar,
      tomador:datos.nmid
    })
  }

  openEdit(content: any) {
    this.modalService.open(content);
  }

  guardar(form: FormGroup) {
    if (this.myForm.valid) {
      const tomador: Tomador = {
        nmid: this.myForm.get('tomador')?.value,
        documento: '',
        tipo_doc: '',
        nombre: '',
        apellido:'',
        direccion:'',
        telefono: '',
        ocupacion: '',
        correo: '',
        f_naci: ''
      }
      let parametros: any;
      parametros = {
        nmid: this.myForm.get('nmid')?.value,
        tipo_siniestro: this.myForm.get('tipo_siniestro')?.value,
        f_siniestro: this.myForm.get('f_siniestro')?.value,
        lugar: this.myForm.get('lugar')?.value,
        tomador: tomador
      }
      this.servicioSiniestro.create(parametros).subscribe(dato => {
        alert("Siniestro guardado exitosamente");
        this.refresh()
      });
    } else {
      alert("Error al guardar");
    }

  }


  refresh() {
    let arraySiniestro: Array<Siniestro> = [];
    this.servicioSiniestro.getSiniestros().subscribe(datos => {
      this.datosSiniestro = datos.dato;
      console.log(datos);
    });
  }

  actualizar(form: FormGroup) {
    this.servicioSiniestro.create(form.value)
      .subscribe(data => {
        alert("Control-siniestro: Se actualizó con exito!!!");
        this.refresh();
      });
  }

  eliminara(item: any) {
    if (confirm("¿Esta seguro de eliminar este registro?")) {
      this.servicioSiniestro.eliminar(item).subscribe((data) => {
        this.refresh();

      }, (error) => console.log(error));
    }

  }

}
