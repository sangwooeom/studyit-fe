import { ImageType } from "../enum";
import {
    logo,
    prevBtnImg,
    mainImg01
} from '../img';
import styles from '../scss/components/Image.module.scss';
import cn from 'classnames';

function getSrc(type: ImageType) {
    switch(type) {
        case ImageType.LOGO_IMG:
            return logo;
        case ImageType.PREV_BUTTON_IMG:
            return prevBtnImg;
        case ImageType.MAIN_IMG_01:
            return mainImg01;
    }
}

function getClassName(type: ImageType) {
    switch (type) {
        case ImageType.LOGO_IMG:
            return styles['image--logo'];
    }
}

export default function Image(props: ImageProps) {
    const { type } = props;

    return <img src={getSrc(type)} className={cn(styles.image, getClassName(type))}/>
}