import styles from './SquadPage.module.css';
import { connect } from 'react-redux';
import MemberCard from './MemberCard';

const SquadModule = ({TDGSquad}) => {
    const frontmen = [TDGSquad[0], TDGSquad[1], TDGSquad[2]];
    const backmen = [TDGSquad[3], TDGSquad[4], TDGSquad[5]];

    return (
        <div className={styles.SquadModule}>
            <span>
                The Squad
            </span>
            <div className={styles.SquadModule_Line}>
                <span>
                    Frontmen
                </span>
                <div className={styles.SquadModule_Members}>
                    {
                        frontmen.map( (member, index) => (
                            <MemberCard 
                                member={member} 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className={styles.SquadModule_Line}>
                <span>
                    Backmen
                </span>
                <div className={styles.SquadModule_Members}>
                    {
                        backmen.map( (member, index) => (
                            <MemberCard 
                                member={member} 
                                key={index + 3}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        TDGSquad: state.TDGSquadReducer.TDGSquad
    };
};

export default connect(mapStateToProps, null)(SquadModule);