import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareLocationComponent } from './square-location.component';

describe('SquareLocationComponent', () => {
  let component: SquareLocationComponent;
  let fixture: ComponentFixture<SquareLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
