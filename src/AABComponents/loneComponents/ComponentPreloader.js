import { useEffect } from 'react';

import loadable from '@loadable/component';
// passive preloading
const DeleteButton = loadable( () =>
    import(/*webpackChunkName: "DeleteButton"*/ './DeleteButton'));
const LoneDeleted = loadable( () =>
    import(/*webpackChunkName: "LoneDeleted"*/ './LoneDeleted'));
const LoneHeader = loadable( () =>
    import(/*webpackChunkName: "LoneHeader"*/ './LoneHeader'));
const LoneInput = loadable( () =>
    import(/*webpackChunkName: "LoneInput"*/ './LoneInput'));
const SaveButton = loadable( () =>
    import(/*webpackChunkName: "SaveButton"*/ './SaveButton'));
const BookInfo = loadable( () =>
    import(/*webpackChunkName: "BookInfo"*/ '../booksPage/blocks/Info'));
const AuthorSelect = loadable( () =>
    import(/*webpackChunkName: "AuthorSelect"*/ '../booksPage/singleBook/AuthorSelect'));
const Header = loadable( () =>
    import(/*webpackChunkName: "Header"*/ './LoneHeader'));
const AuthorInfo = loadable( () =>
    import(/*webpackChunkName: "AuthorInfo"*/ '../authorsPage/blocks/Info'));
const ButtonsDuo = loadable( () => 
    import(/*webpackChunkName: "ButtonsDuo"*/ '../linesPage/blocks/ButtonsDuo'));
const InnerCircle = loadable( () => 
    import(/*webpackChunkName: "InnerCircle"*/ '../linesPage/blocks/InnerCircle'));
const Lines = loadable( () => 
    import(/*webpackChunkName: "Lines"*/ '../linesPage/blocks/Lines'));
const ComplexPart = loadable( () => 
    import(/*webpackChunkName: "ComplexPart"*/ '../linesPage/blocks/ComplexPart'));

const SquadPage = loadable( () => 
    import(/*webpackChunkName: "SquadPage"*/ '../../TDGComponents/squadPage/SquadPage'));
const LoneAbility = loadable( () => 
    import(/*webpackChunkName: "LoneAbility"*/ '../../TDGComponents/squadPage/LoneAbility'));
const ClassCard = loadable( () => 
    import(/*webpackChunkName: "ClassCard"*/ '../../TDGComponents/squadPage/ClassCard'));
const AbilityCard = loadable( () => 
    import(/*webpackChunkName: "AbilityCard"*/ '../../TDGComponents/squadPage/AbilityCard'));
const WizardRiddle = loadable( () => 
    import(/*webpackChunkName: "WizardRiddle"*/ '../../TDGComponents/squadPage/WizardRiddle'));
const WizardAnswer = loadable( () => 
    import(/*webpackChunkName: "WizardAnswer"*/ '../../TDGComponents/squadPage/WizardAnswer'));
const WizardLetter = loadable( () => 
    import(/*webpackChunkName: "WizardLetter"*/ '../../TDGComponents/squadPage/WizardLetter'));
// const images = loadable( () => 
    // import(/*webpackChunkName: "images"*/ '../../uploads/images'));
const preload = component => component.preload && component.preload();

const ComponentPreloader = () => {
    useEffect( () => {
        preload(DeleteButton);
        preload(LoneDeleted);
        preload(LoneHeader);
        preload(LoneInput);
        preload(SaveButton);
        preload(BookInfo);
        preload(AuthorSelect);
        preload(Header);
        preload(AuthorInfo);
        preload(ButtonsDuo);
        preload(InnerCircle);
        preload(Lines);
        preload(ComplexPart);
        // preload(images);
        
        preload(SquadPage);
        preload(LoneAbility);
        preload(ClassCard);
        preload(AbilityCard);
        preload(WizardAnswer);
        preload(WizardLetter);
        preload(WizardRiddle);
    }, []);

    return (
        <>
        </>
    )
};

export default ComponentPreloader;