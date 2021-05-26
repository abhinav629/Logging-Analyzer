import { actionTypes } from '../../enums/actionTypes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-icon',
  templateUrl: './my-icon.component.html',
  styleUrls: ['./my-icon.component.css'],
})
export class MyIconComponent implements OnInit {
  @Input()
  status;

  @Input()
  actionType;

  actionTypes = actionTypes;

  constructor() {}

  ngOnInit(): void {}
}
