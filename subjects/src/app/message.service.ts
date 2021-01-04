import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable({ providedIn: 'root'})
export class MessageService {
    private subject = new Subject<any>();
    // userName = new Subject<any>();
    userName = new BehaviorSubject('Test')
    activatedSub = new Subject<boolean>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next()
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }


}