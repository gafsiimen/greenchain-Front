import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthedNavbarComponent } from './authed-navbar.component';

describe('AuthedNavbarComponent', () => {
  let component: AuthedNavbarComponent;
  let fixture: ComponentFixture<AuthedNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
