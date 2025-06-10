import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
