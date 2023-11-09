import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSynopsisComponent } from './dialog-synopsis.component';

describe('DialogsComponent', () => {
  let component: DialogSynopsisComponent;
  let fixture: ComponentFixture<DialogSynopsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSynopsisComponent]
    });
    fixture = TestBed.createComponent(DialogSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
