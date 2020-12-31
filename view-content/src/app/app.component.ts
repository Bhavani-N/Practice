import { Component, ElementRef, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(HelloComponent) helloComponent: HelloComponent;
  userName = "Bhavani";
  // serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  // @ViewChild('nameRef')  nameElementRef: ElementRef;
  // @ViewChild('pRef') pElementRef: ElementRef;

  // ngAfterViewInit() {
  //   this.nameElementRef.nativeElement.focus();
  //   console.log(this.nameElementRef);
  //   console.log(this.pElementRef.nativeElement.innerHTML);
  //   this.pElementRef.nativeElement.innerHTML = "DOM updated successfully!!";
  // }

  ngOnInit() {
    console.log('Parent OnInit-----------------');
  }
  ngAfterContentInit(){
    console.log('Parent Content Init------------------');
  }
  ngAfterContentChecked(){
    console.log('Parent Content Checked------------------');
  }
  ngAfterViewInit(){
      console.log('Parent View Init------------------');
  } 
  ngAfterViewChecked(){
    console.log('Parent View Checked------------------');
  }


}
