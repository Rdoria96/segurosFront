import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { OwnerComponent } from './owner/owner.component';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { SegurosComponent } from './components/seguros/seguros.component';
import { TomadorComponent } from './components/tomador/tomador.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { SiniestroComponent } from './components/siniestro/siniestro.component';
import { ReaseguradoraComponent } from './components/reaseguradora/reaseguradora.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { HttpClientModule } from '@angular/common/http';
import { SiniestroPipe } from './pipes/siniestro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    PetComponent,
    HomeComponent,
    LayoutComponent,
    SegurosComponent,
    TomadorComponent,
    PagosComponent,
    SiniestroComponent,
    ReaseguradoraComponent,
    ReportesComponent,
    SiniestroPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    NavbarModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
