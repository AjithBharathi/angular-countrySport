import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[available-directive]'
})

export class AvailableDiective implements OnInit {
    @Input('available-directive') availableDirective: boolean;
    @HostBinding('style.color') color: string = 'black';

    constructor(private elementRef: ElementRef, private renderer: Renderer2){

    }

    ngOnInit(){
        if(this.availableDirective === true){
            // this.elementRef.nativeElement.style.color = 'green';
            // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
            this.color = 'green';
        }
        if(this.availableDirective === false){
            // this.elementRef.nativeElement.style.color = 'red';
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
            this.color = 'red';
        }
        
    }

    @HostListener('mouseenter') mouseover(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
    }

    @HostListener('mouseleave') mouseleave(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'unset');
    }
}