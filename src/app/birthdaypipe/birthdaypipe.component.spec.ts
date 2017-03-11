import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaypipeComponent } from './birthdaypipe.component';

describe('BirthdaypipeComponent', () => {
  let component: BirthdaypipeComponent;
  let fixture: ComponentFixture<BirthdaypipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaypipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaypipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
