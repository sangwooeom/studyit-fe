import { ImageType } from "../enum";
import {
    logo
} from '../img';
import styles from '../scss/components/Image.module.scss';
import cn from 'classnames';

function getSrc(type: ImageType) {
    switch(type) {
        case ImageType.LOGO_IMG:
            return logo;
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