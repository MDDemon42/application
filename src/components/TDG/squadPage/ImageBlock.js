import styles from './ImageBlock.module.css';

function createImageStyle (title, item) {
    const style = [styles[item]]; 

    const imageTitle = title.split(' ').join('') + 'Style';

    style.push(styles[imageTitle]);

    return style.join(' ')
};

const ImageBlock = ({image, item}) => {
    if (ImageBlock[image.title]) {
        return ImageBlock[image.title];
    };
    
    console.log('rendering ImageBlock', image.title);

    ImageBlock[image.title] = <img src={image.image}
            className={createImageStyle(image.title, item)}
            alt={image.title}
            title={image.title}
        />

    return (
        ImageBlock[image.title]
    )
};

export default ImageBlock;