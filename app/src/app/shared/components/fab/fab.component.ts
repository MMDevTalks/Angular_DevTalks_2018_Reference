import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mm-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FabComponent implements OnInit {
  @Input() iconName: string;
  constructor() { }

  ngOnInit() {
  }

}
