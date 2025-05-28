import { Routes } from '@angular/router';
import { TabelaTitulosComponent } from './tabela-titulos/tabela-titulos.component';

export const TITULOS_ROUTES: Routes = [
  {path: '', component: TabelaTitulosComponent},

  {
    path: 'cadastrar-novo-titulo',
    loadComponent: () => import('./cadastrar-novo-titulo/cadastrar-novo-titulo.component').then(c => c.CadastrarNovoTituloComponent)
  }
]
