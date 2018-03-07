import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { popIn } from '@movies/animations';
import { ICreateList } from '@movies/interfaces';
import { Movie } from '@movies/models';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'mm-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.scss'],
  animations: [popIn()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToListFormComponent implements OnInit {
  @HostBinding('@popInAnimation')
  public popInAnimation = true;
  @Input() movies: Array<Movie> = [];
  @Output() formSubmitted: EventEmitter<ICreateList> = new EventEmitter();
  @Output() formClosed: EventEmitter<any> = new EventEmitter();
  loading = false;
  addListForm: FormGroup;
  @HostListener('@popInAnimation.done') formAnimated() {
    console.log(arguments);
  }

  constructor(private _fb: FormBuilder) {
    this.addListForm = this._fb.group({
      name: ['', Validators.required],
      description: [],
      language: []
    });
  }

  submitForm() {
    if (this.addListForm.valid) {
      this.loading = true;
      this.formSubmitted.emit(this.addListForm.value as ICreateList);
    }
  }

  closeForm() {
    this.formClosed.emit();
  }

  autoSave() {

  }

  ngOnInit() {
    /*
    ** AutoSave example
    */
    this.addListForm.valueChanges
      .filter(_ => this.addListForm.valid)
      .debounceTime(1500)
      .subscribe(
      formData => {
        console.log(`Autosaving... ${JSON.stringify(formData)}`);
        this.autoSave();
      }
      );
  }

}
