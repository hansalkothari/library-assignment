import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdialogComponent } from './bookdialog.component';

describe('BookdialogComponent', () => {
  let component: BookdialogComponent;
  let fixture: ComponentFixture<BookdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookdialogComponent]
    });
    fixture = TestBed.createComponent(BookdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
