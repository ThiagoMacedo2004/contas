import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Dialog } from '@angular/cdk/dialog';
import { NovoFornecedorComponent } from '../novo-fornecedor/novo-fornecedor.component';
import { MatDialog } from '@angular/material/dialog';
import { FornecedoresServicesService } from '../fornecedores-services.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lista-fornecedores',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css']
})
export class ListaFornecedoresComponent implements OnInit {

  displayedColumns: any[] = ['select', 'RAZAO', 'CNPJ', 'ACAO'];
  dataSource = new MatTableDataSource<Fornecedores>();
  selection = new SelectionModel<Fornecedores>(true, []);

  constructor(
    private _dialog: MatDialog,
    private _service: FornecedoresServicesService
  ) { }

  ngOnInit(): void {
    this.setData()
  }

  setData() {
    this._service.getFornecedores().subscribe(
      (result: Fornecedores[]) => {
        this.dataSource.data = result
      },
      (e: HttpErrorResponse) => {
        console.log(e.message)
        this._service.popUp(e.message)
      }
    )
  }

  dialogNovoFornecedor() {
    this._dialog.open(NovoFornecedorComponent, {
      width: '50%'
    }).afterClosed().subscribe(
      (result: Fornecedores[]) => {
        if(result) {
          this.dataSource.data = result
        }
      }
    )
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

export interface Fornecedores {
  RAZAO_SOCIAL: string;
  CNPJ: string;
}
