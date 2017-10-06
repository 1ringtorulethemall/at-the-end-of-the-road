import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbParentsComponent } from './chb-parents.component';

describe('ChbParentsComponent', () => {
  let component: ChbParentsComponent;
  let fixture: ComponentFixture<ChbParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChbParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChbParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
