import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@movies/shared';
import { ICreateList } from './../../interfaces/ICreateList';
import { AddToListFormComponent } from './add-to-list-form.component';

describe('AddToListFormComponent', () => {
    let component: AddToListFormComponent;
    let fixture: ComponentFixture<AddToListFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                NoopAnimationsModule,
                ReactiveFormsModule
            ],
            declarations: [
            ]
        })
            .overrideComponent(AddToListFormComponent, {
                set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddToListFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form should be invalid and pristine', () => {
        expect(component.addListForm.valid).toBeFalsy();
    });

    it('with correct input, form should become valid', () => {
        component.addListForm.controls['name'].setValue('test');
        component.addListForm.controls['description'].setValue('test');
        component.addListForm.controls['language'].setValue('bg');
        expect(component.addListForm.valid).toBeTruthy();
    });

    it('with no name form should be invalid', () => {
        component.addListForm.controls['description'].setValue('test');
        component.addListForm.controls['language'].setValue('bg');
        expect(component.addListForm.controls['name'].errors['required']).toBeTruthy();
        expect(component.addListForm.valid).toBeFalsy();
    });

    it('with longer name form should be invalid', () => {
        component.addListForm.controls['name'].setValue('1234567890123456');
        component.addListForm.controls['description'].setValue('test');
        component.addListForm.controls['language'].setValue('bg');
        expect(component.addListForm.controls['name'].errors['maxCharacterCountError']).toBeTruthy();
        expect(component.addListForm.controls['name'].errors['maxCharacterCountError']).toEqual({ valid: false });
        expect(component.addListForm.valid).toBeFalsy();
        component.addListForm.controls['name'].setValue('123456789012345');
        expect(component.addListForm.controls['name'].errors).toBeFalsy();
        expect(component.addListForm.valid).toBeTruthy();
    });

    it('should submit if valid', () => {
        let createList: ICreateList;
        component.addListForm.controls['name'].setValue('123456789012345');
        component.addListForm.controls['description'].setValue('test');
        component.addListForm.controls['language'].setValue('bg');
        component.formSubmitted.subscribe(_createListData => createList = _createListData);
        component.submitForm();
        expect(createList).toEqual({
            name: '123456789012345',
            description: 'test',
            language: 'bg',
        });
    });

    it('should autosave after 1500 ms', fakeAsync(() => {
        spyOn(component, 'autoSave').and.callThrough();
        component.addListForm.controls['name'].setValue('123456789012345');
        component.addListForm.controls['description'].setValue('test');
        component.addListForm.controls['language'].setValue('bg');
        tick(1500);
        expect(component.autoSave).toHaveBeenCalled();
    }));

});
