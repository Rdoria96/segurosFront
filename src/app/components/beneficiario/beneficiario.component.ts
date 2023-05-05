import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Beneficiario } from 'src/app/interfaces/beneficiario';
import {HttpClient } from '@angular/common/http';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { Tomador } from 'src/app/interfaces/tomador';
import { TomadorService } from 'src/app/services/tomador.service';

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss']
})
export class BeneficiarioComponent implements OnInit {
  myFrom!: FormGroup;
  datobeneficiario: Array<Beneficiario>=[]
  datosTomador:any;
  constructor(private route : ActivatedRoute, private fb: FormBuilder, private router: Router, private Beneficiario:BeneficiarioService , private Tomadorservi : TomadorService, private http : HttpClient) {

  }
  ngOnInit(): void {
    this.myFrom = this.fb.group({
      nmid:[],
      tipo_doc:[''],
      documento:[''],
      nombre:[''],
      apellido:[''],
      f_naci:[''],
      parentezco:[''],
      ocupacion:[''],
      direccion:[''],
      telefono:[''],
      correo:[''],
      porcentaje_afi:[],
      nombre_banco:[''],
      numero_cuenta:[''],
      tomador:[]
    })
   // listar tomador
    let arraytomador: Array<Tomador> = [];
    this.Tomadorservi.getTomador().subscribe(datos => {
      this.datosTomador = datos.dato;
      console.log("Pruebas", datos)
    })

    let arraybeneficiario: Array<Beneficiario> = [];
    this.Beneficiario.getbeneficiario().subscribe(datos=>{
    this.datobeneficiario = datos.dato;
    })
  }


    refresh(){
      let arraybeneficiario: Array<Beneficiario> = [];
      this.Beneficiario.getbeneficiario().subscribe(datos=>{
      this.datobeneficiario = datos.dato;
      })
    }
    eliminar(nmid:number){
      this.Beneficiario.eliminarbeneficiario(nmid).subscribe(datos=>{
          this.refresh();
          alert("Beneficiario eliminado")
      })
    }
    mostrar(datos: {nmid: any; tipo_doc: any, documento: any, nombre: any,
      apellido: any, f_naci: any, parentezco: any, ocupacion: any,
      direccion:any, telefono: any, correo: any, porcentaje_afi:any, nombre_banco: any, numero_cuenta:any, tomador:any}) {
      this.myFrom.setValue({
        nmid: datos.nmid,
        tipo_doc: datos.tipo_doc,
        documento: datos.documento,
        nombre: datos.nombre,
        apellido: datos.apellido,
        f_naci: datos.f_naci,
        parentezco: datos.parentezco,
        ocupacion: datos.ocupacion,
        direccion: datos.direccion,
        telefono: datos.telefono,
        correo: datos.correo,
        porcentaje_afi: datos.porcentaje_afi,
        nombre_banco: datos.nombre_banco,
        numero_cuenta: datos.numero_cuenta,
        tomador:datos.nmid


      });
    }


    guardar(form: FormGroup) {
      if (this.myFrom.valid) {
        const tom: Tomador = {
          nmid: this.myFrom.get('tomador')?.value,
          documento: '',
          tipo_doc: '',
          nombre: '',
          apellido:'',
          direccion: '',
          telefono: '',
          ocupacion: '',
          correo: '',
          f_naci: ''
        }
         let parametros: any;
        parametros = {
          nmid: this.myFrom.get('nmid')?.value,
          tipo_doc: this.myFrom.get('tipo_doc')?.value,
          documento: this.myFrom.get('documento')?.value,
          nombre: this.myFrom.get('nombre')?.value,
          apellido: this.myFrom.get('apellido')?.value,
          f_naci: this.myFrom.get('f_naci')?.value,
          parentezco: this.myFrom.get('parentezco')?.value,
          ocupacion: this.myFrom.get('ocupacion')?.value,
          direccion: this.myFrom.get('direccion')?.value,
          telefono: this.myFrom.get('telefono')?.value,
          correo: this.myFrom.get('correo')?.value,
          porcentaje_afi: this.myFrom.get('porcentaje_afi')?.value,
          nombre_banco: this.myFrom.get('nombre_banco')?.value,
          numero_cuenta: this.myFrom.get('numero_cuenta')?.value,
          tomador: tom

        }
        this.Beneficiario.createbeneficiario(parametros).subscribe(dato => {
          alert("Beneficiario Guardado");
          this.refresh()
        });
      } else {
        alert("Error al guardar");
      }
      this.refresh()
    }


  }
