import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SubjectService {
    private subject = new Subject<any>();

    constructor() {
        
    }

    sendMessage(message: string) {
        this.subject.next({name: message});
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}