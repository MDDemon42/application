import getOtherAuthors from "../../components/helpFunctions/functions/getOtherAuthors";

test('testing getOtherAuthors()', () => {
    const authors = [
        {
            first_name: 'A',
            last_name: 'A'
        },
        {
            first_name: 'B',
            last_name: 'B'
        },
        {
            first_name: 'C',
            last_name: 'C'
        }
    ];
    const book = {
        first_name: 'B',
        last_name: 'B'
    };
    expect(getOtherAuthors(authors, book)).toContainEqual({first_name: 'A', last_name: 'A'});
    expect(getOtherAuthors(authors, book)).not.toContainEqual({first_name: 'B', last_name: 'B'});
    expect(getOtherAuthors(authors, book)).toContainEqual({first_name: 'C', last_name: 'C'});
    expect(getOtherAuthors(authors, book)).toHaveLength(2);
})