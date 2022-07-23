import C from '../../constants';
import { TDGClass } from '../../../components/TDG/functions/more/createTDGClass';

function makeTDGClassAvailable(TDGClass: TDGClass) {
    return {
        type: C.MAKE_TDG_CLASS_AVAILABLE,
        TDGClass
    };
};

export default makeTDGClassAvailable;