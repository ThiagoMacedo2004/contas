import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FornecedoresServicesService } from '../fornecedores-services.service';
import { MyErrorStateMatcher } from 'src/app/shared/erros-form';
import { MatRadioChange } from '@angular/material/radio';


@Component({
  selector: 'app-novo-fornecedor',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css'],
})
export class NovoFornecedorComponent implements OnInit {
  formGroup!: UntypedFormGroup;
  matcher = new MyErrorStateMatcher();

  // myModel =
  mask = [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];
  tipoFornecedor = 'CNPJ';

  constructor(
    private _fb: FormBuilder,
    private _service: FornecedoresServicesService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<NovoFornecedorComponent>
  ) {}

  ngOnInit(): void {
    this.formulario();
  }

  formulario() {
    this.formGroup = this._fb.group({
      acao: 'novoFornecedor',
      razao: ['', Validators.required],
      tipoFornecedor: ['', Validators.required],
    });
  }

  salvarFornecedor() {
    if (!this.formGroup.valid) {
      return this._service.popUp('Preencha todos os campos corretamente.');
    }

    let cnpjCpf: string = this.formGroup.get('tipoFornecedor')?.value;
    const regex = /\D/g;

    let PJCPFFormatado =  cnpjCpf.replace(regex, '');

    this.formGroup.get('tipoFornecedor')?.reset(PJCPFFormatado, Validators.required)

    let result = this._service.salvarFornecedor(this.formGroup.value)

    if(result) {
      this._dialogRef.close(this._service.fornecedores)
    } else {
      return null
    }


  }

  alterarTipoFornecedor(event: MatRadioChange) {
    this.formGroup.get('tipoFornecedor')?.reset('', Validators.required);

    if (event.value == 2) {
      //value 2 = CPF
      this.mask = [
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ];
      this.tipoFornecedor = 'CPF';
    } else {
      //value 1 = CNPJ
      this.mask = [
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ];
      this.tipoFornecedor = 'CNPJ';
    }
  }
}
