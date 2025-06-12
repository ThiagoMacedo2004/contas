import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FornecedoresServicesService } from '../fornecedores-services.service';
import { MyErrorStateMatcher } from 'src/app/shared/erros-form';
import { MatRadioChange } from '@angular/material/radio';
import { HttpErrorResponse } from '@angular/common/http';


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
  mask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/];
  tipoFornecedor = 'CNPJ';
  titulo: string = 'Novo Fornecedor'

  constructor(
    private _fb: FormBuilder,
    private _service: FornecedoresServicesService,
    private _dialogRef: MatDialogRef<NovoFornecedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.formulario();
    if(this.data) {
      this.titulo = 'Editar Fornecedor'
      this.formGroup.get('acao')?.reset('editarFornecedor')
      this.formGroup.get('razaoSocial')?.reset(this.data.RAZAO_SOCIAL, Validators.required)
      this.formGroup.get('cnpj')?.reset(this.data.CNPJ, Validators.required)
      this.formGroup.get('tipo')?.reset(this.data.TIPO, Validators.required)

      if(this.data.TIPO === 'PF') {
        this.mask = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/,/\d/ ];
        this.tipoFornecedor = 'CPF';
      } else {
        this.mask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/];
        this.tipoFornecedor = 'CNPJ';
      }
    }
  }

  formulario() {
    this.formGroup = this._fb.group({
      acao          : 'novoFornecedor',
      id            : this.data?.ID,
      razaoSocial   : ['', Validators.required],
      cnpj          : ['', Validators.required],
      tipo          : ['', Validators.required],
      tipoFornecedor: [this.tipoFornecedor]
    });
  }

  salvarFornecedor() {
    if (!this.formGroup.valid) {
      return this._service.popUp('Preencha todos os campos corretamente.');
    }

    let cnpjCpf: string = this.formGroup.get('cnpj')?.value;
    const regex = /\D/g;

    let PJCPFFormatado =  cnpjCpf.replace(regex, '');

    this.formGroup.get('cnpj')?.reset(PJCPFFormatado,[ Validators.required, Validators.minLength(14)])
    this.formGroup.get('tipoFornecedor')?.reset(this.tipoFornecedor)


    this._service.salvarFornecedor(JSON.stringify(this.formGroup.value)).subscribe({
      next: (result: any) => {
        if(result.sucesso) {
          this._dialogRef.close(result.sucesso)
        } else {
          this._service.popUp(result.error)
        }
      },

      error: (e: HttpErrorResponse) => {
        // console.log(e)
        this._service.popUp(e.message)
      }
    })

  }

  alterarTipoFornecedor(event: any) {
    console.log(event)
    this.formGroup.get('cnpj')?.reset('', Validators.required);

    if (event.value == "PF") {
      //value 2 = CPF
      this.mask = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'-', /\d/,/\d/ ];

      this.tipoFornecedor = 'CPF';
    } else {
      //value 1 = CNPJ
      this.mask = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/];
      this.tipoFornecedor = 'CNPJ';
    }
  }

  getErrorMessage() {
    if (this.formGroup.get('cnpj')?.hasError('required')) {
      return `${this.tipoFornecedor} é Obrigatorio`;
    }

    return this.formGroup.get('cnpj')?.errors ? `${this.tipoFornecedor} inválido.` : '';

  }
}
