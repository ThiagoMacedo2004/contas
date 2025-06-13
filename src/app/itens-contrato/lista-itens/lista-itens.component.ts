import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ItensService } from '../itens.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { NovoItemComponent } from '../novo-item/novo-item.component';

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css'],
})
export class ListaItensComponent implements OnInit {
  dataSource = new MatTableDataSource<Item>();
  displayedColumns: string[] = ['select', 'ID', 'ITEM', 'ACAO'];

  selection = new SelectionModel<Item>(true, []);

  constructor(
    private _service: ItensService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getItens()
  }

  getItens() {
    this._service.getItens().subscribe(
      (data: Item[]) => {
        this.dataSource.data = data
      },

      (e: HttpErrorResponse) => {
        this._service.popUp(e.message)
      }
    )
  }

  dialogNovoItem() {
    this._dialog.open(NovoItemComponent, {
      width: '24%'
      }
    ).afterClosed().subscribe(
      (result: any) => {
        if(result) {this.getItens()}
      }
    )
  }

  editarItem(item: Item) {}

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

export interface Item {
  ID: string,
  ITEM: string
}
