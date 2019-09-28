import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentMarcheComponent } from './comment-marche.component';

describe('CommentMarcheComponent', () => {
  let component: CommentMarcheComponent;
  let fixture: ComponentFixture<CommentMarcheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentMarcheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
