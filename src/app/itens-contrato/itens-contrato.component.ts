import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itens-contrato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './itens-contrato.component.html',
  styleUrls: ['./itens-contrato.component.css']
})
export class ItensContratoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
