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
    import(/*webpackChunkName: "ButtonsDuo"*/ '../../general/linesPage/blocks/ButtonsDuo'));
const InnerCircle = loadable( () => 
    import(/*webpackChunkName: "InnerCircle"*/ '../../general/linesPage/blocks/InnerCircle'));
const Lines = loadable( () => 
    import(/*webpackChunkName: "Lines"*/ '../../general/linesPage/blocks/Lines'));
const ComplexPart = loadable( () => 
    import(/*webpackChunkName: "ComplexPart"*/ '../../general/linesPage/blocks/ComplexPart'));
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
    }, []);

    return (
        <>
        </>
    )
};

export default ComponentPreloader;