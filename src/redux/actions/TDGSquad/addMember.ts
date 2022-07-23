import C from '../../constants';
import { TDGClass } from '../../../components/TDG/functions/more/createTDGClass';
import { TDGAbility } from '../../../components/TDG/functions/more/createTDGAbility';

function addMember(
    price: number, id: number, 
    level: number, nick_name: string, 
    TDGClass: TDGClass, melee: TDGAbility | null, 
    armor: TDGAbility | null, range: TDGAbility | null, 
    flight: TDGAbility | null, 
    special: (TDGAbility | null)[]
) {
    return {
        type: C.ADD_MEMBER,
        price, id, level, nick_name, TDGClass,
        melee, armor, range, flight, special
    };
};

export default addMember;