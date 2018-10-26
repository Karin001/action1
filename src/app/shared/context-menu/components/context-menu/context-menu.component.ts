import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
export interface Item {
  icon: string;
  name: string;
  actionFn: Function;
}

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  items: Item[];
  constructor(
    private rd2: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }
  setLocation(location: { top: string; right: string }) {
    const el = this.viewContainerRef.element.nativeElement;
    this.rd2.setStyle(el, 'top', location.top);
    this.rd2.setStyle(el, 'right', location.right);
  }
}
