import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  findName: string;
  contexMenu = [
    {
      icon: '',
      name: 'Pools & Spas',
      actionFn: () => { },
    },
    {
      icon: '',
      name: 'Supplies',
      actionFn: () => { },
    },
    {
      icon: '',
      name: 'Resources',
      actionFn: () => { },
    },
    {
      icon: '',
      name: 'Services',
      actionFn: () => { },
    },
  ];
  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 960px)',

    ]);

    layoutChanges.subscribe(result => {
      if (result.matches) {
        this.findName = 'FIND A PRO';
      } else {
        this.findName = 'Find a Pool Pro';
      }
    })
  }

}
