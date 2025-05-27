import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TabelaTitulosComponent } from './tabela-titulos/tabela-titulos.component';

@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [CommonModule, RouterModule, TabelaTitulosComponent],
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
