import { Component, HostBinding, OnInit } from '@angular/core';

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

}
