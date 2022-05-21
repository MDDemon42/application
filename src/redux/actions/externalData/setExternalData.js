import C from '../../constants';

function setExternalData(data) {
    return {
        type: C.ADD_EX_DATA,
        data
    };
};

export default setExternalData;