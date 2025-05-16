import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-menu-tree',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css'],
})
export class MenuTreeComponent implements OnInit {
  treeControl = new NestedTreeControl<Menus>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Menus>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {}

  recolher(menu: Menus) {
    if(this.treeControl.isExpanded(menu)) {
      this.treeControl.collapseAll()
      this.treeControl.expand(menu)
    }
  }

  hasChild = (_: number, node: Menus) =>
    !!node.children && node.children.length > 0;
}

interface Menus {
  menu: string;
  rota: string;
  children?: Menus[];
}

const TREE_DATA: Menus[] = [
  {
    menu: 'Titulos',
    rota: '',
    children: [{ menu: 'Lista de títulos', rota: 'titulos/lista-titulos' }, { menu: 'Novo título', rota: 'titulos/novo-titulo' }],
  },

  {
    menu: 'Fornecedores',
    rota: '',
    children: [{ menu: 'Lista de fornecedores', rota: '/lista-fornecedores' }, { menu: 'Novo fornecedor', rota: '/novo-fornecedor' }],
  },

  {
    menu: 'Itens do Fornecedor',
    rota: '',
    children: [{ menu: 'Lista de itens', rota: '/lista-itens' }, { menu: 'Novo item', rota: '/novo-item' }],
  },

  {
    menu: 'Contas Fluxo',
    rota: '',
    children: [{menu: 'Lista de contas', rota: '/lista-contas'}, {menu: 'Nova conta', rota: '/nova-conta'}],
  },
];
