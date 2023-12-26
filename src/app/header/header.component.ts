import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { SohoModuleNavComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.header') get isHeader() { return true; }
  @HostBinding('class.is-personalizable') get isPersonalizable() { return true; }

  private moduleNavComp?: SohoModuleNavComponent;
  @ViewChild(SohoModuleNavComponent, { static: false })
  set moduleNav(moduleNav: SohoModuleNavComponent | undefined) {
    if (moduleNav) this.moduleNavComp = moduleNav;
  }
  get moduleNav(): SohoModuleNavComponent | undefined { return this.moduleNavComp; }

  constructor() { }

  ngOnInit() {
  }

  toggleModuleNav() {
    console.log(this.moduleNavComp);
    alert();
  }
}
