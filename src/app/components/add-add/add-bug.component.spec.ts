import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugComponent } from './add-bug.component';

describe('AddTutorialComponent', () => {
  let component: AddBugComponent;
  let fixture: ComponentFixture<AddBugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBugComponent]
    });
    fixture = TestBed.createComponent(AddBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
