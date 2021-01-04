import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class RandomService {
    // subject = new Subject<any>();
    subject = new BehaviorSubject<any>(Math.random());

    randomValues() {
        this.subject.next(Math.random());
    }
}