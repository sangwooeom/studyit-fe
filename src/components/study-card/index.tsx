import Badge, { BadgeType } from '../badge';
import BookmarkCheckbox from '../bookmark-checkbox';
import styles from './style.module.scss';
import cn from 'classnames';
import { useState } from 'react';

interface StudyCardProps {
    title: string;

}

export default function StudyCard(props: StudyCardProps) {
    const [ checked, setChecked ] = useState(false);



    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.main)}>
                <div className={styles.description}>
                    <div className={styles.header}>
                        <h4>포트폴리용 프로젝트 팀원 구합니다.</h4>
                        <div className={cn(styles.skill)}>#Spring #React.js #JavaScript #jQuery</div>
                    </div>
                    <div className={cn(styles.status)}>
                        <Badge type={BadgeType.모집중} />
                    </div>
                </div>
                <div>
                    <BookmarkCheckbox onClick={() => setChecked(!checked)} checked={checked}/>
                </div>
            </div>
            <div className={styles.people}>
                <div className={styles.cnt}>
                    <span>모집인원</span>
                    <span>2/5</span>
                </div>
                <div>포지션 현황</div>
            </div>
        </div>
    )
}