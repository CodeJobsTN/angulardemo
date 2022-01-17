import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements
OnInit,
DoCheck,
AfterContentChecked,
AfterViewChecked {
  @Input()
  title = '';

  @Input()
  username = '';

  @Input()
  greetingMessage = '';

  message = ""

  constructor() {
    console.log('constructor data is ', this.greetingMessage)
  }

  ngOnInit(): void {
    this.message = this.greetingMessage + this.username;
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked", this.greetingMessage);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked", this.greetingMessage);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck", this.greetingMessage);
    this.message = this.greetingMessage + this.username;
  }



}
