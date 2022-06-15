import { connect } from 'react-redux';
import styles from './SquadPage.module.css';
import ClassCard from "./ClassCard";
import Button from "react-bootstrap/Button";
import { useRef } from 'react';

const HiringModule = ({TDGClasses}) => {
    const count = TDGClasses.length;
    
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
        <div className={styles.SquadPage}>
            <div className={styles.SquadPage_ClassesBlock}>
                <Button onClick={() => showPrev(sliderLine.current)}>
                    Prev
                </Button>
                <div className={styles.SquadPage_Slider}>
                    <div className={styles.SquadPage_SliderLine}
                         ref={sliderLine}
                         style={{left: '0'}}
                    >
                        {
                            TDGClasses.map( (TDGClass, index) => 
                            <ClassCard TDGClass={TDGClass} key={index}/>                   
                            )
                        }
                    </div>
                </div>
                <Button onClick={() => showNext(sliderLine.current)}>
                    Next
                </Button>
            </div>
        </div>
        
    )
};

function mapStateToProps (state) {
    return {
        TDGClasses: state.TDGClassesReducer.TDGClasses
    };
};

export default connect(mapStateToProps, null)(HiringModule);