import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { DateViewerComponent } from '../date-viewer/date-viewer.component';

@Component({
  selector: 'app-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent implements OnInit, AfterContentInit {
  // @ContentChild(DateViewerComponent) dateViewerComponent: DateViewerComponent;
  @ContentChildren(DateViewerComponent) dateViewerComponent: QueryList<DateViewerComponent>;

  @Input('header') header: string;
  today = new Date().toDateString();

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit() {
    console.log(this.dateViewerComponent.toArray());
  }
 
}
