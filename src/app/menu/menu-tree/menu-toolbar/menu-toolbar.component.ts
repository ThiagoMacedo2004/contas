import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-menu-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }



}
