import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/components/login/login.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { SegurosComponent } from './components/seguros/seguros.component';
import { ReaseguradoraComponent } from './components/reaseguradora/reaseguradora.component';
import { TomadorComponent } from './components/tomador/tomador.component';
import { SiniestroComponent } from './components/siniestro/siniestro.component';
import { BeneficiarioComponent } from './components/beneficiario/beneficiario.component';
import { PagosComponent } from './components/pagos/pagos.component'
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent
      },
      {

        path: 'seguros',
        component: SegurosComponent
      },
      {
        path: 'reaseguradora',
        component: ReaseguradoraComponent
      },
      {
        path: 'tomador',
        component: TomadorComponent

      },
            {
        path: 'tomador',
        component: TomadorComponent

      },

      {
        path: 'siniestro',
        component: SiniestroComponent
      }
      ,{
        path: 'beneficiario',
        component: BeneficiarioComponent
      },
      {
        path: 'pagos',
        component: PagosComponent
      }

    ]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
