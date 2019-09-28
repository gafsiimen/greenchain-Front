import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirTrieurComponent } from './devenir-trieur.component';

describe('DevenirTrieurComponent', () => {
  let component: DevenirTrieurComponent;
  let fixture: ComponentFixture<DevenirTrieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevenirTrieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirTrieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
