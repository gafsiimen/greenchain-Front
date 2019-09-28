import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirCoachComponent } from './devenir-coach.component';

describe('DevenirCoachComponent', () => {
  let component: DevenirCoachComponent;
  let fixture: ComponentFixture<DevenirCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevenirCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevenirCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
