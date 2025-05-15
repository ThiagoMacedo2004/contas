import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-titulo.component.html',
  styleUrls: ['./editar-titulo.component.css']
})
export class EditarTituloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
