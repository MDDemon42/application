import styles from '../SquadPage.module.css';
import MemberCard from './MemberCard';

const MemberLine = ({line}) => {
    const {title, men} = line;

    return (
        <div className={styles.SquadModule_Line}>
                <span>
                    {title}
                </span>
                <div className={styles.SquadModule_Members}>
                    {
                        men.map( (member, index) => (
                            <MemberCard 
                                member={member} 
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
    )
};

export default MemberLine;