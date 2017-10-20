import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramicComponent } from './panoramic.component';

describe('PanoramicComponent', () => {
  let component: PanoramicComponent;
  let fixture: ComponentFixture<PanoramicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
