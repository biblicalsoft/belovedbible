import { LeadingZeroFormatPipe } from './leading-zero-format.pipe';

describe('LeadingZeroFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new LeadingZeroFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
