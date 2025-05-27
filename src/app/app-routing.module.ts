import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'titulos',
    pathMatch: 'full',
  },

  {
    path: 'titulos',
    loadComponent: () => import('./titulos/titulos.component').then(c => c.TitulosComponent),
    children: [
      {
        path: 'novo-titulo',
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
  },

  {
    path: 'fornecedores',
    loadComponent: () => import('./fornecedores/fornecedores.component').then(c => c.FornecedoresComponent),
    children: [
      {
        path: 'novo-fornecedor',
        loadComponent: () => import('./fornecedores/novo-fornecedor/novo-fornecedor.component').then(c => c.NovoFornecedorComponent)
      }
    ]
  },

  {path: '**', redirectTo: 'titulos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
