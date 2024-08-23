import Badge, { BadgeType } from '../badge';
import BookmarkCheckbox from '../bookmark-checkbox';
import styles from './style.module.scss';
import cn from 'classnames';

export default function StudyCard() {
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
                    <BookmarkCheckbox />
                </div>
            </div>
            <div className={styles.people}>
                <div>모집인원 2/5</div>
                <div>포지션 현황</div>
            </div>
        </div>
    )
}