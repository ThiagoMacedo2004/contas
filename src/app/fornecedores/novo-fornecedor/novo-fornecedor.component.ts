import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FornecedoresServicesService } from '../fornecedores-services.service';
import { MyErrorStateMatcher } from 'src/app/shared/erros-form';

@Component({
  selector: 'app-novo-fornecedor',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css']
})
export class NovoFornecedorComponent implements OnInit {

  formGroup!: UntypedFormGroup
  matcher = new MyErrorStateMatcher();

  // myModel =
  mask    = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',/\d/, /\d/, /\d/,/\d/,'-',/\d/,/\d/]

  constructor(
    private _fb: FormBuilder,
    private _service: FornecedoresServicesService
  ) { }

  ngOnInit(): void {
    this.formulario()
  }

  formulario() {
    this.formGroup = this._fb.group({
      acao : 'novoFornecedor',
      razao: ['', Validators.required],
      cnpj : ['', Validators.required]
    })
  }

  salvarFornecedor() {
    if (!this.formGroup.valid) {
      this._service.popUp('Preencha todos os campos corretamente.')
    }
  }

}
