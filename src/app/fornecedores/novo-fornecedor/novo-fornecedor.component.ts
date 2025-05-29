import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-novo-fornecedor',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.css']
})
export class NovoFornecedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
