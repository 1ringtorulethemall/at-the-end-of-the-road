import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesComponent } from './acces.component';

describe('AccesComponent', () => {
  let component: AccesComponent;
  let fixture: ComponentFixture<AccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
