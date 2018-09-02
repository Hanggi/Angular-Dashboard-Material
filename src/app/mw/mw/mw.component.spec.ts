import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwComponent } from './mw.component';

describe('MwComponent', () => {
  let component: MwComponent;
  let fixture: ComponentFixture<MwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
