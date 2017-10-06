import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBroissieuxComponent } from './map-broissieux.component';

describe('MapBroissieuxComponent', () => {
  let component: MapBroissieuxComponent;
  let fixture: ComponentFixture<MapBroissieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBroissieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBroissieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
