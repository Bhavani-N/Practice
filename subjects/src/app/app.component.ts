import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;
  activeSub : Subscription;
  testActivated = false;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
    .subscribe(message => {
      if (message) {
        this.messages.push(message);
        this.testActivated = true;
      } else {
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    this.activeSub = this.messageService.activatedSub.subscribe(isActivate => {
      this.testActivated = isActivate;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.activeSub.unsubscribe();
  }


}
