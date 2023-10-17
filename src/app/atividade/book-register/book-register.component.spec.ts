import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRegisterComponent } from './book-register.component';

describe('CadastroAtividadeComponent', () => {
  let component: BookRegisterComponent;
  let fixture: ComponentFixture<BookRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookRegisterComponent]
    });
    fixture = TestBed.createComponent(BookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
