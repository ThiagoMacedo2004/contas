import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-fornecedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css']
})
export class ListaFornecedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
