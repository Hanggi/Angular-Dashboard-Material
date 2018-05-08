import { MwModule } from './mw.module';

describe('MwModule', () => {
  let mwModule: MwModule;

  beforeEach(() => {
    mwModule = new MwModule();
  });

  it('should create an instance', () => {
    expect(mwModule).toBeTruthy();
  });
});
