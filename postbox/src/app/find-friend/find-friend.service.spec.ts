import { TestBed } from '@angular/core/testing';

import { FindFriendService } from './find-friend.service';

describe('FindFriendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindFriendService = TestBed.get(FindFriendService);
    expect(service).toBeTruthy();
  });
});
