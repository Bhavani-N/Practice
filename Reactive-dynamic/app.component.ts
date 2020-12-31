import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  submitted = false;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      'userData': this.fb.group({
        'username': [null, [Validators.required, this.forbiddenNames.bind(this)]],
        'email': [null, [Validators.required, Validators.email], this.forbiddenEmails]
      }),
      'gender': ['male'],
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get f() {
    return this.signupForm.controls;
  }

  get t() {
    return this.f.hobbies as FormArray;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onReset() {
    this.submitted = false;
    this.signupForm.reset();

  }

  onClear() {
    this.submitted = false;
    this.t.reset();
  }

}
