import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {

  constructor(private el: ElementRef, private render: Renderer2) { 

  }

  ngOnInit(): void {
    let recentLi = this.el.nativeElement;
    this.render.setStyle(recentLi, 'list-style-image', 'url("/assets/tickSmall.png")');     
  }
}
