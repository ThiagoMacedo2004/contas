import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
