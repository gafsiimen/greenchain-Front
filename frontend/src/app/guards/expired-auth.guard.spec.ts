import { TestBed, async, inject } from '@angular/core/testing';

import { ExpiredAuthGuard } from './expired-auth.guard';

describe('ExpiredAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpiredAuthGuard]
    });
  });

  it('should ...', inject([ExpiredAuthGuard], (guard: ExpiredAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
