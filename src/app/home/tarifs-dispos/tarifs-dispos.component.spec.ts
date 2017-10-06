import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsDisposComponent } from './tarifs-dispos.component';

describe('TarifsDisposComponent', () => {
  let component: TarifsDisposComponent;
  let fixture: ComponentFixture<TarifsDisposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifsDisposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifsDisposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
