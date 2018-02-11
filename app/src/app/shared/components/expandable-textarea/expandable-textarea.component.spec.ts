import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTextareaComponent } from './expandable-textarea.component';

describe('ExpandableTextareaComponent', () => {
  let component: ExpandableTextareaComponent;
  let fixture: ComponentFixture<ExpandableTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
