import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FornecedoresServicesService {
  private BASE_PATH = 'http://www.contas.com.br/contas/src/controller/Fornecedores.php';

  fornecedores: any = [];

  constructor(
    private _http: HttpClient,
    private _msg: MatSnackBar,
    private _router: Router
  ) {}

  public getFornecedores(): any {
    return this._http.get(this.BASE_PATH, {
      params: {
        acao: 'getFornecedores'
      }
    }).pipe(
      first()
    )
  }

  public salvarFornecedor(obj: any): any {

  }

  public popUp(data: any) {
    this._msg.openFromComponent(SnackBarComponent, {
      duration: 40000,
      verticalPosition: 'top',
      data: data,
    });
  }
}
