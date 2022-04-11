import { AvatarNamePipe } from './avatar-name.pipe';

describe('AvatarNamePipe', () => {
  it('create an instance', () => {
    const pipe = new AvatarNamePipe();
    expect(pipe).toBeTruthy();
  });
});
