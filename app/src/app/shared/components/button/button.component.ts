import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
