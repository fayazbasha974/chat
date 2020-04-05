import { TestBed } from '@angular/core/testing';

import { SignupLoginService } from './signup-login.service';

describe('SignupLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupLoginService = TestBed.get(SignupLoginService);
    expect(service).toBeTruthy();
  });
});
