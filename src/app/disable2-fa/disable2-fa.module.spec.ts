import { Disable2FaModule } from './disable2-fa.module';

describe('Disable2FaModule', () => {
  let disable2FaModule: Disable2FaModule;

  beforeEach(() => {
    disable2FaModule = new Disable2FaModule();
  });

  it('should create an instance', () => {
    expect(disable2FaModule).toBeTruthy();
  });
});
