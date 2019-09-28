import { TestBed } from '@angular/core/testing';
import { TrieurService } from './trieur.service';


describe('TrieurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrieurService = TestBed.get(TrieurService);
    expect(service).toBeTruthy();
  });
});
