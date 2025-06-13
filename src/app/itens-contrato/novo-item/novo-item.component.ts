import { SharedModule } from 'src/app/shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/erros-form';
import { ItensService } from '../itens.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-novo-item',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.css']
})
export class NovoItemComponent implements OnInit {

  formGroup!: UntypedFormGroup
  matcher = new MyErrorStateMatcher();


  constructor(
    private _fb: FormBuilder,
    private _service: ItensService,
    private _dialogRef: MatDialogRef<NovoItemComponent>
  ) { }

  ngOnInit(): void {
    this.formulario()
  }

  formulario() {
    this.formGroup = this._fb.group({
      acao: ['novoItem'],
      item: ['', Validators.required]
    })
  }

  novoItem() {
    let item = this.formGroup.get('item')?.value.trim()

    this.formGroup.get('item')?.reset(item, Validators.required)

    if(!this.formGroup.valid) {
      return this._service.popUp("Por favor, preencher o campo corretamente.")
    }

    this._service.novoItem(JSON.stringify(this.formGroup.value)).subscribe(
      (result: any) => {
        if(result.sucesso) {
          this._service.popUp(result.sucesso)
          this._dialogRef.close(result.sucesso)
        } else {
          this._service.popUp(result.error)
        }
      }
    )



  }

}
