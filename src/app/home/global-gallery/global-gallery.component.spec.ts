import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalGalleryComponent } from './global-gallery.component';

describe('GlobalGalleryComponent', () => {
  let component: GlobalGalleryComponent;
  let fixture: ComponentFixture<GlobalGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
