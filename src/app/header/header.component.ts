import { Component, EventEmitter, HostBinding, OnInit, Output, ViewChild } from '@angular/core';
import { SohoModuleNavComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.header') get isHeader() { return true; }
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; }

  constructor() { }

  ngOnInit() {
  }

  @Output() hamburgerClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  toggleModuleNav(e: MouseEvent) {
    this.hamburgerClick.next(e);
  }
}
