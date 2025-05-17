import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  treeControl = new NestedTreeControl<Menus, any>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<Menus>();

  @Output() titulo = new EventEmitter()

  constructor(){
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.treeControl.expand(this.dataSource.data[0])
    // this.titulo.emit(this.dataSource.data.)
  }

  recolher(menu: Menus | any) {
    this.titulo.emit(menu.children[0].menu)
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
    children: [{ menu: 'Lista de fornecedores', rota: 'fornecedores/lista-fornecedores' }, { menu: 'Novo fornecedor', rota: 'fornecedores/novo-fornecedor' }],
  },

  {
    menu: 'Itens do Fornecedor',
    rota: '',
    children: [{ menu: 'Lista de itens', rota: 'item-fornecedor/lista-itens' }, { menu: 'Novo item', rota: 'item-fornecedor/novo-item' }],
  },

  {
    menu: 'Conta Fluxo',
    rota: '',
    children: [{menu: 'Lista de contas', rota: 'conta-fluxo/lista-contas'}, {menu: 'Nova conta', rota: 'conta-fluxo/nova-conta'}],
  },
];


