import { TestBed, async, inject } from '@angular/core/testing';

import { CoachRoleGuard } from './coach-role.guard';

describe('CoachRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachRoleGuard]
    });
  });

  it('should ...', inject([CoachRoleGuard], (guard: CoachRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
