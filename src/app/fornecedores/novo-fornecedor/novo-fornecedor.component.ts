import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-fornecedor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css']
})
export class NovoFornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
