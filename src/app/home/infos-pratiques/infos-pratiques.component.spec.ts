import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPratiquesComponent } from './infos-pratiques.component';

describe('InfosPratiquesComponent', () => {
  let component: InfosPratiquesComponent;
  let fixture: ComponentFixture<InfosPratiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosPratiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPratiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
