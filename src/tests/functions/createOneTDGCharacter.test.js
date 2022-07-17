import createOneTDGCharacter from '../../components/TDG/functions/more/createOneTDGCharacher';

test('testing createOneTDGCharacter()', () => {
    const data = [0, 0, 'A', 'B', 'C', 'D','E', 'F', 'G', 'H'];

    expect(createOneTDGCharacter(...data)).toEqual({
        id: 0,
        level: 0,
        nick_name: 'A',
        TDGClass: 'B',
        melee: 'C',
        armor: 'D',
        range: 'E',
        flight: 'F',
        special: ['G', 'H']
    });
});