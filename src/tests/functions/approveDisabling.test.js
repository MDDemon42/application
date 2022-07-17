import approveDisabling from '../../components/TDG/functions/more/approveDisabling';

test('testing approveDisabling()', () => {
    const letters_one = 'RAINBOW'.split('');
    const letters_two = 'misery'.split('');

    expect(approveDisabling(letters_one)).toBeFalsy();
    expect(approveDisabling(letters_two)).toBeTruthy();
});