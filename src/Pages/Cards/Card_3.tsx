import * as React from 'react';
import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import RootStore from '../../Store'
import { observer } from 'mobx-react-lite';


const day: string[] = ['Да', 'Нет', 'Иногда']

const Сфкв_3 = (): JSX.Element => {
    const { userParams } = RootStore;

    const handlerAsk = (el: string, evt: React.MouseEvent<HTMLButtonElement>): void => {
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
                fontStyle='bad' 
                children="Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!" 
            />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__title}>
                <Text 
                    size='l' 
                    color='gold' 
                    children="Снятся ли Вам умершие люди?" 
                />
                </div>
                <div className={styles.card__btns}>
                    {day.map((el, i) => {
                        const str = `gold__${i + 1}`;
                        return (
                            <Link key={i} to="/card4">
                                <Button 
                                    appearance={str} 
                                    children={el}
                                    data-name="question" 
                                    onClick={(evt) => handlerAsk(el, evt)} />
                            </Link>
                        )
                    })}
                </div>
                <Text 
                    className={styles.card__footer} 
                    size='es' 
                    color='gray' 
                    children="Вопрос 4-5" 
                />
            </div>
        </div>
    )
}

export default observer(Сфкв_3);