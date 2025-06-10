import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItensService } from './itens.service';
import { ListaItensComponent } from './lista-itens/lista-itens.component';

@Component({
  selector: 'app-itens-contrato',
  standalone: true,
  imports: [CommonModule, ListaItensComponent],
  templateUrl: './itens-contrato.component.html',
  styleUrls: ['./itens-contrato.component.css']
})
export class ItensContratoComponent implements OnInit {

  constructor(
    private _service: ItensService
  ) { }

  ngOnInit(): void {
    this.getItens()
  }

  getItens() {
    this._service.getItens().subscribe(
      result => console.log(result)
    )
  }

}
