import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-menu-tree',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css'],
})
export class MenuTreeComponent implements OnInit {

  links: any[] = [
    {router: 'titulos', titulo: 'Lista de títulos', icon: 'list' },
    {router: 'fornecedores', titulo: 'Fornecedores', icon: 'source_environment' },
    {router: 'itens', titulo: 'Itens do contrato', icon: 'trolley' },
    {router: 'contas', titulo: 'Contas fluxo', icon: 'wallet' },
    {router: 'contrato', titulo: 'Contratos', icon: 'cases' },
  ]

  ngOnInit(): void {

  }



}
