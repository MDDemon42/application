import C from '../constants';
import createInitialTDGCharacters from '../../TDGComponents/functions/more/createInitialTDGCharacters';

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).TDGSquad) || createInitialTDGCharacters();

const squadReducer = (state= {TDGSquad: initialState}, action) => {
    let TDGSquad = [...state.TDGSquad]
    switch (action.type) {
        case C.DELETE_MEMBER:
            return {
                ...state,
                TDGSquad: TDGSquad.filter(member => member.id !== action.id)
            }
        case C.UPDATE_MEMBER:
            TDGSquad.forEach(member => {
                if (member.id === action.id) {
                    member.level = action.level;
                    member.melee = action.melee;
                    member.armor = action.armor;
                    member.range = action.range;
                    member.flight = action.flight;
                    member.special = action.special;
                }
            })
            return {
                ...state,
                TDGSquad
            }
        case C.ADD_MEMBER:
            TDGSquad = TDGSquad.concat({
                id: action.id,
                level: action.level,
                nick_name: action.nick_name,
                TDGClass: action.TDGClass,
                melee: action.melee,
                armor: action.armor,
                range: action.range,
                flight: action.flight,
                special: action.cpecial
            })
            return {
                ...state,
                TDGSquad
            }
        default:
            return state
    }
};

export default squadReducer;