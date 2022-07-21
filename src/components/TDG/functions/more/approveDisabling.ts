const approveDisabling = (letters: string[]): boolean => {
    const sumLength = letters.reduce( (length, letter) => {
        return length + letter.length;
    }, 0);

    if (sumLength === 7) {
        return false
    };

    return true
};

export default approveDisabling;