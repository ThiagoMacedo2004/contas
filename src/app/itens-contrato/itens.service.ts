import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { SnackBarComponent } from '../shared/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class ItensService {
  private BASE_PATH =
    'http://www.contas.com.br/contas/src/controller/Itens.php';

  constructor(
    private _http: HttpClient,
    private _msg: MatSnackBar,
    private _router: Router
  ) {}

  public getItens(): any {
    return this._http
      .get(this.BASE_PATH, {
        params: {
          acao: 'getItens',
        },
      })
      .pipe(first());
  }

  public novoItem(obj: any): any {
    return this._http.post(this.BASE_PATH, obj).pipe(
      first()
    )
  }

  public popUp(data: any) {
    this._msg.openFromComponent(SnackBarComponent, {
      duration: 4000,
      verticalPosition: 'top',
      data: data,
    });
  }
}
