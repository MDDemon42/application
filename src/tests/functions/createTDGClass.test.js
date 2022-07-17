import createTDGClass from '../../components/TDG/functions/more/createTDGClass';

test('testing createTDGClass()', () => {
    const data = ['A', 'B', 'C', ['D', 'E'], ['F', 'G'], 0, 'H'];

    expect(createTDGClass(...data)).toEqual({
        icon: 'A',
        title: 'B',
        description: 'C',
        abilities: ['D', 'E'],
        possibleNickNames: ['F', 'G'],
        price: 0,
        color: 'H'
    });
});