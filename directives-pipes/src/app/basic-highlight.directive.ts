import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    @Input('appBasicHighlight') defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor : string;
    @HostBinding('disabled') private ishovering : boolean;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.defaultColor;
    }
    @HostListener('mouseenter') onMouseOver(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'violet');
        this.backgroundColor = this.highlightColor;
        this.ishovering = true;
    }  

    @HostListener('mouseleave') onMouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
        this.ishovering = false;
    }



}