import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contas-fluxo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contas-fluxo.component.html',
  styleUrls: ['./contas-fluxo.component.css']
})
export class ContasFluxoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
