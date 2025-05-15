import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-titulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-titulos.component.html',
  styleUrls: ['./tabela-titulos.component.css']
})
export class TabelaTitulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
