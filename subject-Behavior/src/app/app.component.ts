import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userText: string = 'Pragim';
  title = 'app';
  role = 'Developer';
  testActivated = false;
  private activatedSub: Subscription;

  public name = "Bhavani";
  public message = '';
  public lastEvent = '';

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.activatedSub = this.testService.activatedEmitter.subscribe(didActivate => {
      this.testActivated = didActivate;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }

}
