import styles from './style.module.scss';
import cn from 'classnames';
import { mainImg01 } from '../../img';
import StudyCard from '../../components/study-card';

console.log(styles)

export default function Main() {
    return (
        <div className={cn(styles.container)}>
            <div className={cn(styles.gate)}>
                <div className={cn(styles.area)}>
                    <div className={cn(styles.content)}>
                        <div className={cn(styles.text)}>
                            <h1>
                                스터딧에서<br />
                                스터디 IT 해보세요
                            </h1>
                            <p>
                                기획자, 개발자, 디자이너를 위한<br />
                                IT 스터디 플랫폼
                            </p>
                        </div>
                        <div className={cn(styles.btn)}>
                            <button >탐색 시작하기</button>
                        </div>
                    </div>
                    <div className={cn(styles.img)}>
                        <img src={mainImg01} />
                    </div>
                </div>
            </div>
            <div className={cn(styles.main)}>
                <div className={cn(styles.list)}>
                    <div className={cn(styles.header)}>
                        <h3>스터디 찾기</h3>
                        <a href="#!">전체 보기</a>
                    </div>
                    <div className={cn(styles.content)}>
                        <div className={cn(styles.btn)}>
                            <button className={cn(styles.prevBtn)}></button>
                        </div>
                        <div className={cn(styles.cards)}>
                            <StudyCard />
                            <StudyCard />
                            <StudyCard />
                        </div>
                        <div className={cn(styles.btn)}>
                            <button className={cn(styles.nextBtn)}></button>
                        </div>
                    </div>
                </div>
                <div className={cn(styles.list)}>
                    <div className={cn(styles.header)}>
                        <h3>멤버 찾기</h3>
                        <a href="#!">전체 보기</a>
                    </div>
                    <div className={cn(styles.content)}>
                        <div className={cn(styles.btn)}>
                            <button className={cn(styles.prevBtn)}></button>
                        </div>
                        <div className={cn(styles.cards)}>
                        </div>
                        <div className={cn(styles.btn)}>
                            <button className={cn(styles.nextBtn)}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}