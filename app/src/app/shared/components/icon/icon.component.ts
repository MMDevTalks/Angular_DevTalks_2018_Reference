import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mm-icon',
  styleUrls: ['./icon.component.scss'],
  template: `
    <svg class="svg-icon" version="1.1" >
      <use [attr.xlink:href]="'#'+name"></use>
    </svg>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
