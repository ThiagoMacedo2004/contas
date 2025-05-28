import { Routes } from "@angular/router";
import { ListaFornecedoresComponent } from "./lista-fornecedores/lista-fornecedores.component";

export const FORNECEDORES_ROUTES: Routes = [
  {path: '', component: ListaFornecedoresComponent},

  {
    path: 'novo-fornecedor',
    loadComponent: () => import('./novo-fornecedor/novo-fornecedor.component').then(c => c.NovoFornecedorComponent)
  }
]
