import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthedFooterComponent } from './unauthed-footer.component';

describe('UnauthedFooterComponent', () => {
  let component: UnauthedFooterComponent;
  let fixture: ComponentFixture<UnauthedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
