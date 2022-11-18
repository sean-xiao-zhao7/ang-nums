import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseover(eventData) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave') mousegone(eventData) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
