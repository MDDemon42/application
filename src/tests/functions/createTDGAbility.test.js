import createTDGAbility from '../../components/TDG/functions/more/createTDGAbility';

test('testing createTDGAbility()', () => {
    const data = [0, 'A', 'B', true, true, 'C'];

    expect(createTDGAbility(...data)).toEqual({
        level: 0,
        title: 'A',
        description: 'B',
        active: true,
        mass: true,
        image: 'C'
    });
});