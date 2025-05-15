import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'titulos/tabela-titulos',
    pathMatch: 'full',
  },

  {
    path: 'titulos',
    loadComponent: () => import('./titulos/titulos.component').then(c => c.TitulosComponent),
    children: [
      {
        path: 'tabela-titulos',
        loadComponent: () => import('./titulos/tabela-titulos/tabela-titulos.component').then(c => c.TabelaTitulosComponent)
      },

      {
        path: 'cadastrar-novo-titulo',
        loadComponent: () => import('./titulos/cadastrar-novo-titulo/cadastrar-novo-titulo.component').then(c => c.CadastrarNovoTituloComponent)
      },

      {
        path: 'editar-titulo',
        loadComponent: () => import('./titulos/editar-titulo/editar-titulo.component').then(c => c.EditarTituloComponent)
      },

      {
        path: 'detalhes-titulo',
        loadComponent: () => import('./titulos/detalhes-titulo/detalhes-titulo.component').then(c => c.DetalhesTituloComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
