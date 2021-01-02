import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";

export interface CanComponentLeave {
    canLeave: () => boolean;
}

@Injectable()

export class DeactivateGuard implements CanDeactivate<CanComponentLeave> {

    constructor() {}

    canDeactivate(component: CanComponentLeave) {
        if(component.canLeave) {
            return component.canLeave()
        } else {
            return true;
        }
    }
}
