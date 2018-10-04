import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  // add the new eventemitter
  @Output()
  closeSideNav = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  // method
  onToggleClose() {
    this.closeSideNav.emit();
  }
}
