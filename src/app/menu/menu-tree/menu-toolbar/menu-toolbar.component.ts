import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-menu-toolbar',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }



}
