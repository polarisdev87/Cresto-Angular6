import { EmailVerificationModule } from './email-verification.module';

describe('EmailVerificationModule', () => {
  let emailVerificationModule: EmailVerificationModule;

  beforeEach(() => {
    emailVerificationModule = new EmailVerificationModule();
  });

  it('should create an instance', () => {
    expect(emailVerificationModule).toBeTruthy();
  });
});
