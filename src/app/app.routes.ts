import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: 'titulos', pathMatch: 'full'
  },

  {
    path: 'titulos',
    loadChildren: () => import('./titulos/titulos.routes').then(r => r.TITULOS_ROUTES)
  },

  {
    path: 'fornecedores',
    loadChildren: () => import('./fornecedores/fornecedores.routes').then(r => r.FORNECEDORES_ROUTES)
  },

  {
    path: 'itens-contrato',
    loadChildren: () => import('./itens-contrato/itens-contrato.routes').then(r=> r.ITENS_CONTRATO_ROUTES)
  },

  {
    path: 'contas-fluxo',
    loadComponent: () => import('./contas-fluxo/contas-fluxo.component').then(c => c.ContasFluxoComponent)
  },

  {
    path: 'contratos',
    loadComponent: () => import('./contratos/contratos.component').then(c => c.ContratosComponent)
  }
]
