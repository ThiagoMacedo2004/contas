import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrar-novo-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadastrar-novo-titulo.component.html',
  styleUrls: ['./cadastrar-novo-titulo.component.css']
})
export class CadastrarNovoTituloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
