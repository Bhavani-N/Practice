import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    @Input() set appUnless(condition: boolean) {
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef); 
            // createEmbeddedView - dynamically add content to the component view(DOM).
        } else {
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}
    // viewContainerRef - represents a container where one or more views can be attached to a component
}