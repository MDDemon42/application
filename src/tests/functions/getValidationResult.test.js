import getValidationResult from "../../components/helpFunctions/functions/getValidationResult";

test('testing getValidationResult()', () => {
    const criterion_group_one = [
        'A', 'B', 10
    ];
    const criterion_group_two = [
        'A', 'B', ''
    ];
    const criterion_group_three = [
        'A', 'B', new Date().getFullYear() + 1
    ];
    const criterion_group_four = [
        'A', '', 10
    ];
    const criterion_group_five = [
        '', 'B', 10
    ];
    const criterion_group_six = [
        'A', 'B', 10000
    ];
    expect(getValidationResult(...criterion_group_one)).toBeTruthy();
    expect(getValidationResult(...criterion_group_two)).toBeFalsy();
    expect(getValidationResult(...criterion_group_three)).toBeFalsy();
    expect(getValidationResult(...criterion_group_four)).toBeFalsy();
    expect(getValidationResult(...criterion_group_five)).toBeFalsy();
    expect(getValidationResult(...criterion_group_six)).toBeFalsy();
})