import C from '../../constants';
import { TDGAbility } from '../../../components/TDG/functions/more/createTDGAbility';

function updateMember(
    id: number, level: number, 
    melee: TDGAbility | null, armor: TDGAbility | null, 
    range: TDGAbility | null, flight: TDGAbility | null, 
    special: TDGAbility | null
) {
    return {
        type: C.UPDATE_MEMBER,
        id, level, melee, armor, range, flight, special
    };
};

export default updateMember;