import { TestBed } from '@angular/core/testing';

import { ArtistGuardGuard } from './artist-guard.guard';

describe('ArtistGuardGuard', () => {
  let guard: ArtistGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArtistGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
