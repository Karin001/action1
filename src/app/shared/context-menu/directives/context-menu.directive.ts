import { Directive, ComponentFactoryResolver, ViewContainerRef, HostListener, ComponentRef, Input, Renderer2 } from '@angular/core';
import { ContextMenuComponent } from '../components/context-menu/context-menu.component';



@Directive({
  selector: '[appContextMenu]'
})
export class ContextMenuDirective {
  component: ComponentRef<ContextMenuComponent>;
  @Input('appContextMenu')
  appContextMenu;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private rd2:Renderer2
  ) {
    window.document.addEventListener('click', () => {
      if (this.component) {
        this.component.destroy();
        this.component = null;
      }
    })
  }
  @HostListener('click', ['$event'])
  openMenu(event: Event) {
    event.stopPropagation();
    if (this.component) {
      return;
    }
    const top = event['clientY'] + 'px';
    const right = window.document.body.offsetWidth - event['clientX'] + 'px';
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ContextMenuComponent);
    this.component = this.viewContainerRef.createComponent(componentFactory);
    this.rd2.appendChild(window.document.body, this.component.location.nativeElement);
    this.component.instance.setLocation({ top, right });
    this.component.instance.items = this.appContextMenu;
  }
}
