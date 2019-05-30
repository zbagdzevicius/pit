import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAbsoluteComponent } from './footer-absolute.component';

describe('FooterAbsoluteComponent', () => {
  let component: FooterAbsoluteComponent;
  let fixture: ComponentFixture<FooterAbsoluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAbsoluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAbsoluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
