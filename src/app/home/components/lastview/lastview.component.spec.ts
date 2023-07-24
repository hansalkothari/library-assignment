import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastviewComponent } from './lastview.component';

describe('LastviewComponent', () => {
  let component: LastviewComponent;
  let fixture: ComponentFixture<LastviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastviewComponent]
    });
    fixture = TestBed.createComponent(LastviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
