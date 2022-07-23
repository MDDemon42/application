import C from '../../constants';

interface ExternalData {
    avatar: string,
    birthdate: number,
    city: string,
    createdAt: string,
    education: string,
    id: string,
    name: string
}

function setExternalData(data: ExternalData[]) {
    return {
        type: C.ADD_EX_DATA,
        data
    };
};

export default setExternalData;