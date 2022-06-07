// not working yet

const imageChanger = event => {
    const newFile = event.target.files[0];
    if (newFile && newFile.type === 'image/jpeg') {
        return newFile
    } else {
        alert('Не jpeg!')
    };
    return ''
};

export default imageChanger;