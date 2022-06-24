// import HiringModule from './hiringModule/HiringModule';
import SquadModule from '../hiringPage/squadModule/SquadModule';
import styles from './SquadPage.module.css';

import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const SquadPage = () => {
    return (
        <div className={styles.Squad}>
            <NavLink to={'/TDG/hiring'}>
                <Button variant={'success'}>
                    <p>
                        Hire a new adventurer
                    </p>
                </Button>
            </NavLink>
            <SquadModule/>
        </div>
    )
};

export default SquadPage;