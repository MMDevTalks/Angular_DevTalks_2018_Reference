import { Component, OnInit, forwardRef, Self } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'mm-expandable-textarea',
  templateUrl: './expandable-textarea.component.html',
  styleUrls: ['./expandable-textarea.component.scss'],
  providers: []
})
export class ExpandableTextareaComponent implements OnInit, ControlValueAccessor {
  value: string;
  writeValue(value: any): void {
    this.value = value;
  }

  private onChange = (value: string) => { };
  private onTouched = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  change(value) {
    this.onChange(value);
  }

  focus() {
    this.onTouched();
  }

  constructor( @Self() public controlDirective: NgControl) {
    controlDirective.valueAccessor = this;
  }

  ngOnInit() {
  }

}
