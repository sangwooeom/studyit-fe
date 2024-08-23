import styles from './style.module.scss';
import cn from 'classnames';

export enum BadgeType {
    모집중 = "모집중",
    모집_완료 = "모집 완료",
    사이드_프로젝트 = "사이드 프로젝트",
    지식_공유_및_탐구 = "지식 공유 및 탐구",
    온라인 = "온라인",
    오프라인 = "오프라인",
    온_오프라인 = "온/오프라인"
}

interface BadgeProps {
    type: BadgeType;
}

export default function Badge(props: BadgeProps) {
    const { type } = props;

    return (
        <span className={
            cn(
                styles.badge,
                {
                    [styles.recruitment]: type === BadgeType.모집중,
                    [styles.recruitmentCompletion]: type === BadgeType.모집_완료
                }
            )}
        >
            {type}
        </span>
    )
}