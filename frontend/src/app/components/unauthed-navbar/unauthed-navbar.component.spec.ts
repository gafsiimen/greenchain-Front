import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthedNavbarComponent } from './unauthed-navbar.component';

describe('UnauthedNavbarComponent', () => {
  let component: UnauthedNavbarComponent;
  let fixture: ComponentFixture<UnauthedNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
