const denyDisabling = (letters) => {
    let sumLength = letters.reduce( (length, letter) => {
        return length + letter.length;
    }, 0);

    if (sumLength) {
        return false
    };

    return true
};

export default denyDisabling;