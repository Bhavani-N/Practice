import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DateViewerComponent } from './date-viewer/date-viewer.component';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
    inpvalue: number = 4;
    color: string;
    shouldSayHello = true;
    home = true;
    showElement = true;
    submitted = true;
    filteredStatus = '';
    example: string = "Testing Custom Pipes";
    title: string = "Directives";
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean= true;
    txtsize = '25px';
    colors = ['CYAN', 'GREEN', 'YELLOW'];
    myColor = '';
    private dateVal: Date = new Date();
    private jsonVal: Object  = {moo: 'foo', goo: {too: 'new'}};
    asyncPromise: Promise<string>;
    asyncObservable: Observable<string>;
    @ViewChild('myTemplateRef') myTemplate;
    @ViewChild('somecontent') somecontent: ElementRef;
    // @ViewChild(DateViewerComponent) dateViewRef: DateViewerComponent;
    @ViewChildren(DateViewerComponent) dateViewRef: QueryList<DateViewerComponent>;
    name = 'Angular';
    parent = 10;
    parentCount = 0;
    @ViewChildren(HelloComponent) hellos: QueryList<any>;


    constructor() {
      console.log(this.somecontent);
    }

    ngOnInit() {
      this.asyncPromise = this.makePromise('Async Promise');
      this.asyncObservable = this.makeObservable('Async Observable');
    }

    ngAfterViewInit() {
      console.log(this.myTemplate);
      // console.log(this.somecontent.nativeElement);
      console.log(this.dateViewRef.toArray());
      this.dateViewRef.toArray().forEach(element => {
        setInterval(() => {
        element.today = new Date()
      }, 1000)
      });
      setInterval(()=> {
        // this.dateViewRef.today = new Date()
      }, 1000);
      this.hellos.forEach(hello => console.log(hello));
    }

    makePromise(value: string): Promise<string> {
      return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(value), 3000);
      })
    }

    makeObservable(value: string): Observable<string> {
      return  of(value).pipe(delay(3000));
    }

    appStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('stable');
      }, 2000)
    });

    employees: any[] = [
      {
        code: '1001', name: 'Rohini', gender: 'Female',
        annualSalary: 5500, dateOfBirth: '22/09/1988'
      },
      {
        code: '1002', name: 'Priya',  gender: 'Female',
        annualSalary: 5700.95, dateOfBirth: '12/01/1996' 
      },
      {
        code: '1003', name: 'Sunitha',  gender: 'Female',
        annualSalary: 5900, dateOfBirth: '08/06/1979' 
      },
      {
        code: '1004', name: 'Priyanka',  gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '17/07/1979' 
      },
    ];

    onAddEmployee() {
      this.employees.push({
        code: '1005', name: 'Hemalatha',  gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '17/07/1979'
      })
    }

    onSwitch() {
      this.inpvalue = 3;
      this.showElement = false;
    }

    MyStyle() {
      let mystyles = {
        'font-weight': this.isBold ? 'bold': 'normal',
        'font-style': this.isItalic ? 'italic': 'normal',
        'font-size.px': this.fontSize
      };
      return mystyles;
    }

    applyClasses() {
      let classes = {
        boldClass: this.applyBoldClass,
        italicsClass: this.applyItalicsClass
      };
      return classes;
    }

    displayCounter(count) {
      this.parentCount = count;
    }
}
