import axios from 'axios';
import setExternalData from './setExternalData';

function getExternalData(url) {
    return dispatch => {
        axios.get(url).then(response => dispatch(setExternalData(response.data)))
    };
};

export default getExternalData;