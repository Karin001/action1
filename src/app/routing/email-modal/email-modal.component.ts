import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.scss']
})
export class EmailModalComponent implements OnInit {
  close$ = new Subject();
  form = {
    name: null,
    phone: null,
    email: null,
    currently: true
  };
  checkedImg = "url(../../../assets/imgs/checked_ok.png)";
  unCheckedImg = "url(../../../assets//imgs/empty.png)";
  constructor() { }


  ngOnInit() {
  }

}
