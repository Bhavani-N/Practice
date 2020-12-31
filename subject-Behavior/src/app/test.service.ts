import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TestService {
    // activatedEmitter = new Subject<boolean>();
    activatedEmitter = new BehaviorSubject<boolean>(false);
    private user = new BehaviorSubject<string>('john');
    castUser = this.user.asObservable();

    editUser(newuser) {
        this.user.next(newuser);
    }

}