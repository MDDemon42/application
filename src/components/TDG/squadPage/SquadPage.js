import { useRef } from 'react';
import SquadModule from '../hiringPage/squadModule/SquadModule';
import styles from './SquadPage.module.css';
import { connect } from 'react-redux';
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import MemberPage from './MemberPage';

const SquadPage = ({TDGSquad}) => {
    const {money, members} = TDGSquad;
    const realMembers = [];
    members.forEach( member => {
        if (member.nick_name) {
            realMembers.push(member)
        }
    })

    const count = realMembers.length;

    let offset = 0;
    const sliderLine = useRef(null);

    function showNext(elem) {
        offset = parseInt(elem.style.left);
        
        if (offset === -520 * (count - 1)) {
            offset = 0;
        } else {
           offset -= 520; 
        };
        
        elem.style.left = offset + 'px';
    };

    function showPrev(elem) {
        offset = parseInt(elem.style.left);
        
        if (offset === 0) {
            offset = -520 * (count - 1);
        } else {
           offset += 520; 
        }
        
        elem.style.left = offset + 'px';
    };

    return (
        <div className={styles.Squad}>
            <div className={styles.Squad_Members}>
                <div className={styles.Squad_Members_Slider}>
                    <div className={styles.Squad_Members_Slider_SliderLine}
                        ref={sliderLine}
                        style={{left: '0'}}
                    >
                        {
                            realMembers.map( member => 
                                <MemberPage member={member} key={member.id}/>
                            )
                        }
                    </div>
                </div>
                <div className={styles.Squad_Members_Navigation}>
                    <Button onClick={() => showPrev(sliderLine.current)}>
                        Prev
                    </Button>
                    <Button onClick={() => showNext(sliderLine.current)}>
                        Next
                    </Button>
                </div>
            </div>
            <SquadModule>
                <NavLink to={'/TDG/hiring'}>
                    <Button variant={'success'}>
                        Hire a new adventurer
                    </Button>
                </NavLink>
            </SquadModule>
        </div>
    )
};

function mapStateToProps (state) {
    return {
        TDGSquad: state.TDGSquadReducer.TDGSquad
    };
};

export default connect(mapStateToProps, null)(SquadPage);