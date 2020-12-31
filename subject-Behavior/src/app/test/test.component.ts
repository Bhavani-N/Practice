import { Component, EventEmitter, Input, OnInit, Output, DoCheck } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, DoCheck {
  @Input('parentData') public names;
  @Input('roleData') roles;
  @Output() childEvent = new EventEmitter();
  @Output() selectedClick = new EventEmitter<string>();
  user:string;
  newUser:string;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.castUser.subscribe(users => this.user = users);
  }

  ngDoCheck() {
    console.log('DoCheck:  Changes detected')
  }

  fireEvent() {
    this.childEvent.emit('Hey Elaachi');
  }

  onClick(feature: string) { 
    this.selectedClick.emit(feature);
  }

  onActivate() {
    this.testService.activatedEmitter.next(true);
  }

  editedUser(user: string) {
    this.testService.editUser(this.newUser);
  }

}
