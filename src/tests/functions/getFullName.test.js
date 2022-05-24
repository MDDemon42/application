import getFullName from "../../components/helpFunctions/functions/getFullName";

test('testing getFullName()', () => {
    const person = {
        first_name: 'John',
        last_name: 'Doe'
    };
    expect(getFullName(person)).toBe('John Doe');
});