import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbdModal1 } from './contact.component';

describe('NgbdModal1', () => {
  let component: NgbdModal1;
  let fixture: ComponentFixture<NgbdModal1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModal1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModal1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
