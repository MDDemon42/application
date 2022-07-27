const getValidationResult = (
    criterion_1: string = '', 
    criterion_2: string = '', 
    criterion_3: number = 0
): boolean => {
    return criterion_1.length > 0 &&
        criterion_2.length > 0 &&
        String(criterion_3).length > 0 &&
        criterion_3 <= new Date().getFullYear();
};

export default getValidationResult;