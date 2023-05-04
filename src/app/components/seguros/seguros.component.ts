import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reaseguradora } from 'src/app/interfaces/reaseguradora';
import { Seguros } from 'src/app/interfaces/seguros';
import { Tomador } from 'src/app/interfaces/tomador';
import { ReaseguradoraService } from 'src/app/services/reaseguradora.service';
import { SegurosService } from 'src/app/services/seguros.service';
import { TomadorService } from 'src/app/services/tomador.service';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  myForm!: FormGroup;
  datoSeguro: Array<Seguros> = [];
  datosTomador: any;
  datosReaseguradora: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private services: SegurosService, private servicest: TomadorService,private servicesr: ReaseguradoraService, private http: HttpClient) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nmid: [],
      tipo_seguro: [''],
      valor: [],
      descripcion: [''],
      f_inicial: [''],
      f_final: [''],
      tomador: [],
      reaseguradora: []
    })



    //Listar datos
    let arrayseguros: Array<Seguros> = [];
    this.services.getseguros().subscribe(datos => {
      this.datoSeguro = datos.dato;
    })

    //Listar tomador
    let arraytomador: Array<Tomador> = [];
    this.servicest.getTomador().subscribe(datos => {
      this.datosTomador = datos.dato;
      console.log("Pruebas", datos)
    })

    let arrayaseguradora:Array<Reaseguradora> =[];
    this.servicesr.getReaseguradora().subscribe(datos=>{
      this.datosReaseguradora= datos.dato;
    })
  }


  //Guardar Seguros
  guardar(form: FormGroup) {
    if (this.myForm.valid) {
      const tomador: Tomador = {
        nmid: this.myForm.get('tomador')?.value,
        documento: '',
        tipo_doc: '',
        nombre: '',
        apellido:'',
        telefono: '',
        ocupacion: '',
        correo: '',
        f_naci: ''
      }
      const rease: Reaseguradora ={
        nmid: this.myForm.get('reaseguradora')?.value,
        nit: '',
        razon_social:'',
        monto_seguro: 0,
        porcentaje_cober:0
      }
      let parametros: any;
      parametros = {
        nmid: this.myForm.get('nmid')?.value,
        tipo_seguro: this.myForm.get('tipo_seguro')?.value,
        valor: this.myForm.get('valor')?.value,
        descripcion: this.myForm.get('descripcion')?.value,
        f_inicial: this.myForm.get('f_inicial')?.value,
        f_final: this.myForm.get('f_final')?.value,
        tomador: tomador,
        reaseguradora: rease

      }
      this.services.createseguros(parametros).subscribe(dato => {
        alert("Reaseguradora guardada");
        this.refresh()
      });
    } else {
      alert("Error al guardar");
    }

  }

  //Metodo refrescar tabla
  refresh() {
    let arrayseguro: Array<Seguros> = [];
    this.services.getseguros().subscribe(datos => {
      this.datoSeguro = datos.dato;
    })
  }

  //Metodo eliminar dato
  eliminar(nmid: number) {
    this.services.eliminarseguros(nmid).subscribe(datos => {
      this.refresh();
      alert("Seguro eliminado");
    })
  }

  //Metodo mostrar datos
  mostrar(datos: { nmid: any; tipo_seguro: any, valor: any, descripcion: any, f_inicial: any, f_final: any, tomador: any, reaseguradora: any }) {
    this.myForm.setValue({
      nmid: datos.nmid,
      tipo_seguro: datos.tipo_seguro,
      valor: datos.valor,
      descripcion: datos.descripcion,
      f_inicial: datos.f_inicial,
      f_final: datos.f_final,
      tomador: datos.nmid,
      reaseguradora: datos.nmid
    });
  }


}


