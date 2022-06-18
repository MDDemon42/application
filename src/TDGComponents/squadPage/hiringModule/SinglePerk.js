import LoneAbility from './LoneAbility';
import './SinglePerk.css';

const SinglePerk = ({pack, chosen}) => {
    const {perk, setter} = pack;

    return (
        <div>
            <input type={'radio'} 
                name={'perk'} 
                id={perk.title}
                hidden
                defaultChecked={chosen}
                onChange={() => {
                    console.log(perk)
                    setter(perk)
                }}
            />
            <label htmlFor={perk.title}>
                <LoneAbility level={perk}/>
            </label>
        </div>
    )
};

export default SinglePerk;