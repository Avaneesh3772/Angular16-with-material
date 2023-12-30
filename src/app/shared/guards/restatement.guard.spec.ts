import { TestBed } from '@angular/core/testing';

import { RestatementGuard } from './restatement.guard';

describe('RestatementGuard', () => {
  let guard: RestatementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestatementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
