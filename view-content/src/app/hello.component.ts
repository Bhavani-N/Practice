import { Component, ContentChild, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'hello',
    template: `<h1>{{name}}</h1>
    <ng-content></ng-content>
    <ng-content select="[card-body]"></ng-content>
    <ng-content select="[card-body1]"></ng-content>
    <ng-content select="[card-body2='hello2]"></ng-content>
    <ng-content select=".new-hello"></ng-content>
    <ng-content select="[attr1][attr2]"></ng-content>
    <ng-content select=".class1.class2"></ng-content>
    `,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
    @Input() name: string;
    @ContentChild('child1') contentChild;

    ngAfterContentInit() {
        console.log(this.contentChild);
    }
}