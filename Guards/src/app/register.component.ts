import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CanComponentLeave } from "./deactivate.guard";

@Component({
    template: `
    <div>
        <div class="form-group">
        <label>Enter Username</label>
        <input type="text" class="from-control" [formControl]="userName">
        </div>
        <input type="submit" class="btn btn-primary" value="Register">
    </div>
    `
})
export class RegisterComponent implements CanComponentLeave {
   userName: FormControl = new FormControl();

   canLeave(): boolean {
        if(this.userName.dirty) {
            return window.confirm('You have some unsaved changes. Are you sure you want to navigate?');
        }
        return true;
    }
}