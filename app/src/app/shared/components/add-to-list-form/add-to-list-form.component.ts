import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ICreateList } from 'app/shared/interfaces/icreate-list';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'mm-add-to-list-form',
  templateUrl: './add-to-list-form.component.html',
  styleUrls: ['./add-to-list-form.component.scss']
})
export class AddToListFormComponent implements OnInit {
  @Output() formClosed: EventEmitter<void> = new EventEmitter();
  @Output() formSubmitted: EventEmitter<{ list: ICreateList, movies: Array<any> }> = new EventEmitter();
  @Input() movies: Array<any>;
  addListForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.addListForm = this._fb.group({
      name: ['', Validators.required],
      description: [],
      language: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.addListForm.valueChanges
      .filter(_ => this.addListForm.valid)
      .debounceTime(1500)
      .subscribe(formData => console.log(`Autosaving...`, formData));
  }
  createList() {

    if (this.addListForm.invalid) {
      return;
    }

    this.formSubmitted.emit({ list: this.addListForm.value, movies: this.movies });

  }

  closeForm() {
    this.formClosed.emit();
  }

}
