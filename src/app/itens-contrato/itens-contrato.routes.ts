import { Routes } from "@angular/router";
import { ItensContratoComponent } from "./itens-contrato.component";

export const ITENS_CONTRATO_ROUTES: Routes = [
  {path: '', component: ItensContratoComponent},

//   {
//     path: 'novo-fornecedor',
//     loadComponent: () => import('./novo-fornecedor/novo-fornecedor.component').then(c => c.NovoFornecedorComponent)
//   }
]
