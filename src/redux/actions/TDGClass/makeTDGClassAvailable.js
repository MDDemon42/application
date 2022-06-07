import C from '../../constants';

function makeTDGClassAvailable(TDGClass) {
    return {
        type: C.MAKE_TDG_CLASS_AVAILABLE,
        TDGClass
    };
};

export default makeTDGClassAvailable;