const getValidationResult = (criterion_1= '', criterion_2= '', criterion_3= 0) => {
    return criterion_1.length > 0 &&
        criterion_2.length > 0 &&
        String(criterion_3).length > 0 &&
        criterion_3 <= new Date().getFullYear();
};

export default getValidationResult;