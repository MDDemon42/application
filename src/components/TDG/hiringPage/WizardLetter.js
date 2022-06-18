const WizardLetter = ({letter, letterSetter}) => {
    return (
        <input 
            style={{textAlign: 'center'}}
            type={'text'} 
            value={letter}
            maxLength={1}
            minLength={1}
            disabled={true}
            size={1}
            onChange={letterSetter}
        />
    )
};

export default WizardLetter;