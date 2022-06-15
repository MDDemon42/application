import HiringModule from './HiringModule';
import SquadModule from './SquadModule';
import styles from './SquadPage.module.css';

const SquadPage = () => {


    return (
        <div className={styles.Squad}>
            <HiringModule/>
            <SquadModule/>
        </div>
    )
};

export default SquadPage;