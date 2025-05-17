import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cadastrar-novo-titulo',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cadastrar-novo-titulo.component.html',
  styleUrls: ['./cadastrar-novo-titulo.component.css']
})
export class CadastrarNovoTituloComponent implements OnInit {

  public mask = {
    guide: true,
    showMask : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/',/\d/, /\d/,/\d/, /\d/]
  };

  public myModel = ''

  constructor() { }

  ngOnInit(): void {
  }

}
