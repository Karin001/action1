import { Component, OnInit,ViewChild,ViewContainerRef,Renderer2,ComponentRef,  ElementRef, TemplateRef,ComponentFactoryResolver } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EmailModalComponent } from '../email-modal//email-modal.component';
import { ComponentFactory } from '@angular/core/src/render3';
import { VirtualTimeScheduler } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @ViewChild('filter_con') filter_con:ElementRef;
  @ViewChild('toggle_menu') toggle_menu:ElementRef;
  @ViewChild('backDrop') backDrop: ElementRef;
  @ViewChild('backDrop_con') backDropCon: ElementRef;
  show = true;
  modalComponent :ComponentRef<EmailModalComponent>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private view: ViewContainerRef,
    private rd2: Renderer2,
    private comfac:ComponentFactoryResolver,
    private el: ElementRef
  ) { 
    console.log(this.view)
  }

  ngOnInit() {
    const layoutChanges = this.breakpointObserver.observe([
      '(max-width: 960px)',

    ]);

    layoutChanges.subscribe(result => {
      if(result.matches) {
        this.show = true;
        console.log(this.filter_con.nativeElement)
        this.rd2.appendChild(this.filter_con.nativeElement,this.toggle_menu.nativeElement);
        this.rd2.setStyle(this.toggle_menu.nativeElement,'display','block')
        this.rd2.setStyle(this.toggle_menu.nativeElement,'width','100%')
      } else {
        const pNond = this.rd2.parentNode(this.filter_con.nativeElement);
        this.rd2.appendChild(pNond,this.toggle_menu.nativeElement);
        this.rd2.setStyle(this.toggle_menu.nativeElement,'width','auto')
      }
    })
  }
  toggle(){
    if(this.show){
      this.rd2.setStyle(this.toggle_menu.nativeElement,'display','none')
      this.show = false;
    } else{
      this.rd2.setStyle(this.toggle_menu.nativeElement, 'display','block')
      this.show = true;
    }
    
  }
  openModal(){
    const componentFactory = this.comfac.resolveComponentFactory(EmailModalComponent);
    this.rd2.setStyle(this.backDrop.nativeElement, 'display','block')
    this.modalComponent =  this.view.createComponent(componentFactory);
    this.rd2.appendChild(this.backDropCon.nativeElement,this.modalComponent.location.nativeElement)
    this.modalComponent.instance.close$.pipe(take(1)).subscribe(close=>this.modalComponent.destroy())
    //this.rd2.setStyle(this.modalComponent.location.nativeElement,'width','400px')
  }
  cancel(){
    this.rd2.setStyle(this.backDrop.nativeElement, 'display','none')
    this.modalComponent.destroy()
  }
}
