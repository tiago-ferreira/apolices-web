import { ApolicesModule } from './apolices.module';

describe('ApolicesModule', () => {
  let apolicesModule: ApolicesModule;

  beforeEach(() => {
    apolicesModule = new ApolicesModule();
  });

  it('should create an instance', () => {
    expect(apolicesModule).toBeTruthy();
  });
});
