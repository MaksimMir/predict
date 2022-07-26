import * as React from 'react';
import { Link } from 'react-router-dom';
import Text from '../../components/Text/Text';
import styles from './Cards.module.scss';
import Button from '../../components/Button/Button';
import RootStore from '../../Store'
import { observer } from 'mobx-react-lite';

const day: string[] = ['Утро', 'День', 'Вечер', 'Ночь']

const Card_1 = (): JSX.Element => {
    let { userParams } = RootStore;

    const handlerDayTime = (el: string, evt: React.MouseEvent<HTMLButtonElement>): void => {
        const dataName = evt.currentTarget.dataset.name;
        userParams.addData(dataName, el);
    }

    return (
        <div className={styles.card}>
                <div className={styles.card__top}>
                    <Text 
                        className={styles.card__text} 
                        size='s' 
                        color='gray' 
                        fontStyle="bad" 
                        children="Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы."
                    />
                </div>
                <div className={styles.card__content}>
                    <div className={styles.card__title}>
                        <Text 
                            size='l' 
                            color='gold' 
                            children="Когда Вы чувствуете себя наиболее комфортно?" 
                        />
                    </div>
                    <div className={styles.card__btns}>
                        {day.map((el, i) => {
                            const str = `gold__${i + 1}`;
                            return (
                                <Link
                                    key={i}
                                    to="/card2"
                                > 
                                    <Button 
                                        appearance={str} 
                                        children={el}
                                        data-name="hour" 
                                        onClick={(evt) => handlerDayTime(el, evt)}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                    <Text 
                        className={styles.card__footer} 
                        size='es' 
                        color='gray' 
                        children="Вопрос 2-5" 
                    />
                </div>
        </div>
    )
}

export default observer(Card_1);