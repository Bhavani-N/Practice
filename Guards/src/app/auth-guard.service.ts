import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (!this.authService.isUserLoggedIn()) {
            alert('You are not allowed to view this page. You are redirected to login page');

            this.router.navigate(['login'], {queryParams: {retUrl: route.url} });
            return false;
        }
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean| UrlTree {
        if(!this.authService.isAdminUser()) {
            alert('You are not allowed to view this page');
            return false;
        }
        return true;
    }
}