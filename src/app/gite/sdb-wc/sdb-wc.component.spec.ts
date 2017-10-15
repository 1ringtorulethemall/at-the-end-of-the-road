import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdbWcComponent } from './sdb-wc.component';

describe('SdbWcComponent', () => {
  let component: SdbWcComponent;
  let fixture: ComponentFixture<SdbWcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdbWcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdbWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
