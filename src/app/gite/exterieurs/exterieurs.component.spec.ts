import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExterieursComponent } from './exterieurs.component';

describe('ExterieursComponent', () => {
  let component: ExterieursComponent;
  let fixture: ComponentFixture<ExterieursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExterieursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExterieursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
