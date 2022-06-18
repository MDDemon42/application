import { useState } from 'react';
import Button from "react-bootstrap/Button";
import classes from './BottomInfo.module.css';

const BottomInfo = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    let divClasses = [classes.BottomInfo];

    if (isOpened) {
        divClasses.push(classes.BottomInfo__isOpened)
    } else {
        divClasses.push(classes.BottomInfo__isClosed)
    };

    return (
        <>
            <div className={divClasses.join(' ')}>
                <Button onClick={() => {
                    const tic = isOpened ? 300 : 0;
                    setTimeout( () => setIsOpened(!isOpened), tic);
                    setTimeout( () => setIsVisible(!isVisible), 300 - tic);
                }}
                        className={classes.BottomInfo_Button}
                        variant={'primary'}
                >
                    Обо мне ={')'}
                </Button>
                {
                    isVisible &&
                    <div className={classes.BottomInfo_Info}>
                        <p>
                            Максимов Даниил
                        </p>
                        <a href={'https://t.me/@MDDemon42'}>
                            t.me/@MDDemon42
                        </a>
                    </div>
                }
                
            </div>
        </>
        
    )
};

export default BottomInfo;