import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieurDashboardComponent } from './trieur-dashboard.component';

describe('TrieurDashboardComponent', () => {
  let component: TrieurDashboardComponent;
  let fixture: ComponentFixture<TrieurDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrieurDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
