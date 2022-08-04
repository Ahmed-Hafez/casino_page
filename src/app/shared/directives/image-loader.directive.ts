import {
  Attribute,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appImageLoader]',
})
export class ImageLoaderDirective {
  constructor(
    @Attribute('srcOnError') public srcOnError: string,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('error') onError() {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'src',
      this.srcOnError
    );
  }
}
