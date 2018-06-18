import { TestBed, inject } from '@angular/core/testing';

import { EmailVerificationService } from './email-verification.service';

describe('EmailVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailVerificationService]
    });
  });

  it('should be created', inject([EmailVerificationService], (service: EmailVerificationService) => {
    expect(service).toBeTruthy();
  }));
});
