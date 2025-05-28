import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListaFornecedoresComponent } from './lista-fornecedores/lista-fornecedores.component';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-fornecedores',
  standalone: true,
  imports: [CommonModule, ListaFornecedoresComponent, SharedModule],
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
