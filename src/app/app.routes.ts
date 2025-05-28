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
  }
]
