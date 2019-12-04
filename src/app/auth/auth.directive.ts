import {Directive, OnInit, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[auth-directive]'
})

export class AuthDirective implements OnInit {
    
    @HostBinding('style.text-decoration') color;
    constructor(){

    }
    ngOnInit(){
        this.color = 'unset';
    }
    @HostListener('mouseover') mouseovfdgsdfer() {
        this.color = 'underline';
    };
    @HostListener('mouseleave') mouseleavdffe() {
        this.color = 'unset';
    };
}