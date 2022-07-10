import styles from '../../squadPage/SquadPage.module.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import MemberLine from './MemberLine';

const SquadModule = ({TDGSquad, children}) => {
    const {money, members} = TDGSquad;
    let { pathname } = useLocation();
    pathname = pathname.split('/')[2];

    const frontmen = {
        title: 'Frontmen',
        men: [members[0], members[1], members[2]]
    };

    const backmen = {
        title: 'Backmen',
        men: [members[3], members[4], members[5]]
    };

    const reserve = {
        title: 'Reserve',
        men: [members[6], members[7], members[8]]
    };

    return (
        <div className={styles.Squad_Additional}>
            <div className={styles.SquadModule}>
                <span className={styles.SquadModule_Header}>
                    The Squad
                </span>
                <span>
                    Money: {money} coins
                </span>
                <MemberLine line={frontmen}/>
                <MemberLine line={backmen}/>
                <MemberLine line={reserve}/>
            </div>
            {
                pathname === 'squad' &&
                children 
            }
        </div>
    )
};

function mapStateToProps (state) {
    return {
        TDGSquad: state.TDGSquadReducer.TDGSquad
    };
};

export default connect(mapStateToProps, null)(SquadModule);