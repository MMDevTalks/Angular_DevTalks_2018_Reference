import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mm-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  @Input() iconName: string;
  constructor() { }

  ngOnInit() {
  }

}
