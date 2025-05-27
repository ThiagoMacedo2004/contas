import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-cadastrar-novo-titulo',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cadastrar-novo-titulo.component.html',
  styleUrls: ['./cadastrar-novo-titulo.component.css'],
   providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CadastrarNovoTituloComponent implements OnInit {

  public mask = {
    guide: true,
    showMask : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/',/\d/, /\d/,/\d/, /\d/]
  };

  formFornecedor!: UntypedFormGroup
  formDadosPagamento!: UntypedFormGroup

  btnFornecedor: boolean = false
  btnItem: boolean = false

  constructor(
    private _fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formularioFornecedor()
    this.formularioDadosPagamento()
  }

  formularioFornecedor() {
    this.formFornecedor = this._fb.group({
      EMPRESA         : ['', Validators.required],
      // FORNECEDOR      : ['', Validators.required],
      // NF              : ['', Validators.required],
      // COD_FORNECEDOR  : ['', Validators.required],
      // ITEM_FORNECEDOR : ['', Validators.required]
    })
  }

  formularioDadosPagamento() {
    this.formDadosPagamento = this._fb.group({
      CONTA_FLUXO: ['', Validators.required]
    })
  }

}
