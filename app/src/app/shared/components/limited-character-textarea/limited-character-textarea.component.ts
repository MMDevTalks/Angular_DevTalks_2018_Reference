import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'mm-limited-character-textarea',
  templateUrl: './limited-character-textarea.component.html',
  styleUrls: ['./limited-character-textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitedCharacterTextareaComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() mmValidateMaxCharacterCount: number;
  public value: string;

  private onChange = (value: string) => { };
  private onTouched = () => { };
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  change(value) {
    this.onChange(value);
  }

  focus() {
    this.onTouched();
  }
  constructor(public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
  }

}
