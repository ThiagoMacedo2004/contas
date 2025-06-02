import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class FornecedoresServicesService {
  private BASE_PATH = 'http://www.contas.com.br/fornecedores';

  fornecedores: any = [];

  constructor(
    private _http: HttpClient,
    private _msg: MatSnackBar,
    private _router: Router
  ) {}

  public salvarFornecedor(obj: any): any {

    if (this.fornecedores.length === 0) {
      this.fornecedores.push(obj);
      this.popUp('Fornecedor Cadastrado com sucesso !');
      return this.fornecedores;
    } else {
      let i = this.fornecedores.indexOf(obj)
      console.log(i)
    }
  }

  public popUp(data: any) {
    this._msg.openFromComponent(SnackBarComponent, {
      duration: 4000,
      verticalPosition: 'top',
      data: data,
    });
  }
}
