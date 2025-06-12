import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  private BASE_PATH = 'http://www.contas.com.br/contas/src/controller/Itens.php';


  constructor(
    private _http: HttpClient,
    private _msg: MatSnackBar,
    private _router: Router
  ) {}

  public getItens(): any {
    return this._http.get(this.BASE_PATH, {
      params: {
        acao: 'getItens'
      }
    }).pipe(
      first()
    )
  }
}
