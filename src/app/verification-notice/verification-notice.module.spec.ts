import { VerificationNoticeModule } from './verification-notice.module';

describe('VerificationNoticeModule', () => {
  let verificationNoticeModule: VerificationNoticeModule;

  beforeEach(() => {
    verificationNoticeModule = new VerificationNoticeModule();
  });

  it('should create an instance', () => {
    expect(verificationNoticeModule).toBeTruthy();
  });
});
