import denyDisabling from '../../components/TDG/functions/more/denyDisabling';

test('testing denyDisabling()', () => {
    const letters_one = 'RAINBOW'.split('');
    const letters_two = ''.split('');

    expect(denyDisabling(letters_one)).toBeFalsy();
    expect(denyDisabling(letters_two)).toBeTruthy();
});