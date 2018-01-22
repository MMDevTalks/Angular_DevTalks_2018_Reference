import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-icon',
  styleUrls: ['./icon.component.scss'],
  template: `
    <svg class="svg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use [attr.xlink:href]="'#'+name"></use>
    </svg>
    `
})
export class IconComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
