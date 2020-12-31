import { Component, DoCheck, Input, OnChanges, 
SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy } from "@angular/core";

@Component({
    selector: 'simple',
    template: 'You entered: {{ simpleInput }}'
})
export class SimpleComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
OnDestroy {
  @Input() simpleInput: string;

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
    for(let propertyName in changes) {
        let change = changes[propertyName];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);
        console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' +previous);
    }
  }

  ngDoCheck() {
    console.log('DoCheck:  Changes detected')
  }

  ngAfterContentInit() {
    console.log('After Content Init')
  }

  ngAfterContentChecked() {
    console.log('After Content Checked')
  }

  ngAfterViewInit() {
      console.log('After View Init')
  }

  ngAfterViewChecked() {
    console.log('After View Checked')
  }

  ngOnDestroy() {
     console.log('ngOnDestroy called')
  }


}