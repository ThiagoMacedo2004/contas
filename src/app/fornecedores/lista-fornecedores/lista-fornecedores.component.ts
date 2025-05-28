import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-lista-fornecedores',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css']
})
export class ListaFornecedoresComponent implements OnInit {

  displayedColumns: string[] = ['select', 'RAZAO', 'CNPJ'];
  dataSource = new MatTableDataSource<Fornecedores>(FORNECEDOR_DATA);
  selection = new SelectionModel<Fornecedores>(true, []);

  constructor() { }

  ngOnInit(): void {
  }

   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }


}

export interface Fornecedores {
  RAZAO: string;
  CNPJ: string;
}

const FORNECEDOR_DATA: Fornecedores[] = [
  {RAZAO: 'Hydrogen', CNPJ: '1.0079'},
  {RAZAO: 'Helium', CNPJ: '4.0026'},
  {RAZAO: 'Lithium', CNPJ: '6.941'},
  {RAZAO: 'Beryllium', CNPJ: '9.0122'},
  {RAZAO: 'Boron', CNPJ: '10.811'},
  {RAZAO: 'Carbon', CNPJ: '12.0107'},
  {RAZAO: 'Nitrogen', CNPJ: '14.0067'},
  {RAZAO: 'Oxygen', CNPJ: '15.9994'},
  {RAZAO: 'Fluorine', CNPJ: '18.9984'},
  {RAZAO: 'Neon', CNPJ: '20.1797'},
];
