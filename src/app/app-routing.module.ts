import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'titulos/lista-titulos',
    pathMatch: 'full',
  },

  {
    path: 'titulos',
    loadComponent: () => import('./titulos/titulos.component').then(c => c.TitulosComponent),
    children: [
      {
        path: 'lista-titulos',
        loadComponent: () => import('./titulos/tabela-titulos/tabela-titulos.component').then(c => c.TabelaTitulosComponent)
      },

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
    children: [
      {
        path: 'lista-fornecedores',
        loadComponent: () => import('./fornecedores/lista-fornecedores/lista-fornecedores.component').then(c => c.ListaFornecedoresComponent)
      },

      {
        path: 'novo-fornecedor',
        loadComponent: () => import('./fornecedores/novo-fornecedor/novo-fornecedor.component').then(c => c.NovoFornecedorComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
