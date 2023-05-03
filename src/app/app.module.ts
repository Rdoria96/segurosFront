import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SegurosComponent } from './component/seguros/seguros.component';
=======
import { MaterialModule } from './material/material.module';
import { OwnerComponent } from './owner/owner.component';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';

>>>>>>> a390f969f77c63d076998e2be4a035529f0c19cf

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SegurosComponent
=======
    OwnerComponent,
    PetComponent,
    HomeComponent,
    LayoutComponent

>>>>>>> a390f969f77c63d076998e2be4a035529f0c19cf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    NavbarModule


>>>>>>> a390f969f77c63d076998e2be4a035529f0c19cf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
