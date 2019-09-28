import { TestBed, async, inject } from '@angular/core/testing';

import { TrieurRoleGuard } from './trieur-role.guard';

describe('TrieurRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrieurRoleGuard]
    });
  });

  it('should ...', inject([TrieurRoleGuard], (guard: TrieurRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
