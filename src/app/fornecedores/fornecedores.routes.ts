import { Routes } from "@angular/router";
import { FornecedoresComponent } from "./fornecedores.component";

export const FORNECEDORES_ROUTES: Routes = [
  {path: '', component: FornecedoresComponent},

  {
    path: 'novo-fornecedor',
    loadComponent: () => import('./novo-fornecedor/novo-fornecedor.component').then(c => c.NovoFornecedorComponent)
  }
]
