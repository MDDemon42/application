import C from '../constants';
import createInitialTDGCharacters from '../../TDGComponents/functions/more/createInitialTDGCharacters';

let initialState = (localStorage['garpix-test'] && JSON.parse(localStorage['garpix-test']).TDGSquad) || { money: 100, members: createInitialTDGCharacters() };

const squadReducer = (state= {TDGSquad: initialState}, action) => {
    let members = [...state.TDGSquad.members];
    let money = state.TDGSquad.money;
    switch (action.type) {
        case C.EXCHANGE_MEMBERS:
            const member_one = members.find( member => member.id === action.id_one);
            const member_two = members.find( member => member.id === action.id_two);
            member_one.id = action.id_two;
            member_two.id = action.id_one;
            return {
                ...state,
                members
            }
        case C.DELETE_MEMBER:
            return {
                ...state,
                members: members.filter(member => member.id !== action.id)
            }
        case C.UPDATE_MEMBER:
            members.forEach(member => {
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
                members
            }
        case C.ADD_MEMBER:
            members.forEach(member => {
                if (member.id === action.id) {
                    member.level = action.level;
                    member.nick_name = action.nick_name;
                    member.TDGClass = action.TDGClass;
                    member.melee = action.melee;
                    member.armor = action.armor;
                    member.range = action.range;
                    member.flight = action.flight;
                    member.special = action.special;
                }
            });
            money -= action.price;
            return {
                ...state,
                members,
                money
            }
        default:
            return state
    }
};

export default squadReducer;