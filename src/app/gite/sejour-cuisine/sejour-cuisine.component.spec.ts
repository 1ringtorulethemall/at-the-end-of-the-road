import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SejourCuisineComponent } from './sejour-cuisine.component';

describe('SejourCuisineComponent', () => {
  let component: SejourCuisineComponent;
  let fixture: ComponentFixture<SejourCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejourCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejourCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
