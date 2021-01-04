import { Component } from "@angular/core";
import { Subject } from "rxjs";

import { MessageService } from "./message.service";
import { RandomService } from "./random.service";

@Component({
    selector: 'app-test',
    template: `
    <div>user Name: <strong>{{ userName }}</strong> </div>
    <br><br>
    <input type="text" placeholder="update Name" #uname> <br><br>
    <button (click)="updateUserName(uname)">Update Name</button>
    <button (click)="onRandom()">Random values</button>
    `
})
export class TestComponent {
    userName: string ;

    constructor(private messageService: MessageService, private randomService: RandomService) { 
        this.messageService.userName.subscribe(uname=> {
          this.userName = uname
        })
    }

    updateUserName(uname) {
        // this.userName = uname.value
        this.messageService.userName.next(uname.value);
        // this.randomService.randomValues();
        this.randomService.subject.subscribe((data)=> {
            console.log('Subscriber B:', data);
        })
    }

    onRandom() {
        this.randomService.subject.subscribe((data)=> {
            console.log('Subscriber A:', data);
        })
    }

}