import * as React from 'react';
import styles from './Top.module.scss';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import { Link } from 'react-router-dom';

interface IScroll {
    scrollPage: (id: string) => void;
}

const Top = ({scrollPage}: IScroll): JSX.Element => {

    const clickFromScroll = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        const id = evt.currentTarget.dataset.id;
        scrollPage(id);
    }

    return (
        <header className={styles.header}>
            <div className="container col">
                <div className={styles.header__top}>
                    <Text 
                        size='es' 
                        color='gray' 
                        children="Лучшие астрологи и экстрасенсы Румынии" 
                    />
                </div>
                <div className={styles.header__line}></div>
                <div className={styles.header__top}>
                    <Text 
                        size='m' 
                        color='gray' 
                        children="Точность прогноза: 97%" 
                    />
                </div>
                <div className="col">
                    <div className={styles.bunner__img}></div>
                    <div className={styles.bunner__text}>
                    <Text 
                        size='s' 
                        color='gold' 
                        children="Вас беспокоит вопрос о том"
                    />                             
                    <div className={styles.bunner__upper}>
                    <Text 
                        size='s' 
                        color='gold' 
                        children="когда Вы покинете этот Мир и при каких обстоятельствах?" 
                    />
                    </div>
                    </div>
                    <div className="bunner__btns col">
                    <Link to="/card1">
                    <Button 
                        appearance="gold__1" 
                        children="Да" 
                    />
                    </Link>
                    <Button 
                        appearance="gold__3" 
                        children="Нет" 
                        data-id='1'
                        onClick={clickFromScroll}
                    />
                    </div>
                    <Text 
                        size='es' 
                        color='gray' 
                        children="Онлайн предсказание" 
                    />
                </div>
            </div>
        </header>
    )
}

export default Top;