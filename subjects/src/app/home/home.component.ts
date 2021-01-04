import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string;

  constructor(private messageService: MessageService) { 
    this.messageService.userName.subscribe(uname=> {
      this.userName = uname
    })
  }

  sendMessage() {
    this.messageService.sendMessage('Message from Home to App component')
  }

  ngOnInit() {
  }

  clearMessage() {
    this.messageService.clearMessage();
  }

  updateUserName(uname) {
    // this.userName = uname.value
    this.messageService.userName.next(uname.value)
  }

  

}
