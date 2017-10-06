import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChbEnfantsComponent } from './chb-enfants.component';

describe('ChbEnfantsComponent', () => {
  let component: ChbEnfantsComponent;
  let fixture: ComponentFixture<ChbEnfantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChbEnfantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChbEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
