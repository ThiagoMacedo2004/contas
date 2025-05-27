import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
import { MenuToolbarComponent } from './menu-tree/menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuTreeComponent,MenuToolbarComponent, SharedModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(
  ) {   }

  ngOnInit(): void {

  }



}
