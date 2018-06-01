import { BackofficeModule } from './backoffice.module';

describe('BackofficeModule', () => {
  let backofficeModule: BackofficeModule;

  beforeEach(() => {
    backofficeModule = new BackofficeModule();
  });

  it('should create an instance', () => {
    expect(backofficeModule).toBeTruthy();
  });
});
