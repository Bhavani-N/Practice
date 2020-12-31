import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[ofRed]'
})
export class OfRedDirective {

    constructor(private elRef: ElementRef) {
        console.log(elRef)
        elRef.nativeElement.style.color = 'red';
    }

    @Input() defaultColor: string;
    @Input('ofRed') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.elRef.nativeElement.style.backgroundColor = color;
    }
    
}