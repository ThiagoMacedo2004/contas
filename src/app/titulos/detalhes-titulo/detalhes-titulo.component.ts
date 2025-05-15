import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-titulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-titulo.component.html',
  styleUrls: ['./detalhes-titulo.component.css']
})
export class DetalhesTituloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
