import { Component, OnInit } from '@angular/core';
import { BirthdaypipeComponent  } from '../birthdaypipe/birthdaypipe.component';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  birthday = new Date(1988, 2, 1);
  
}
