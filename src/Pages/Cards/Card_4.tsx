import * as React from "react";
import styles from './Cards.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import RootStore from '../../Store'
import { observer } from 'mobx-react-lite';

const text: string[] = [
    'По вам скучает очень близкий человек, которого больше нет в мире живых.',
    'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.',
    'По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.'
]

const Card_4 = (): JSX.Element => {
    const [ message, setMessage ] = useState<string>(text[0]);

    useEffect(() => {
        const age = RootStore.userData.date.age
        if (age > 18 && age <= 35) {
            setMessage(text[0]);
        } else if(age >35 && age <= 45) {
            setMessage(text[1]);
        } else if(age > 45) {
            setMessage(text[2]);
        }
    }, [])
    return (
        <div className={styles.card}>
            <div className={styles.card__top}>
            <div className={styles.card__info}>
            <Text 
                size="s" 
                color="black" 
                fontStyle="bad" 
                children={message} 
            />
            </div>
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__title}>
                <Text 
                    size="l" 
                    color="gold" 
                    children="Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?" 
                />
                </div>
                <div className={styles.card__btns}>
                    <Link to="/sound">
                        <Button 
                            appearance="gold__1" 
                            children="Да"
                        />
                    </Link>
                    <Link to="/info">
                        <Button 
                            appearance="gold__4" 
                            children="Затрудняюсь ответить"
                            onClick={() => RootStore.fetchData}
                        />
                    </Link>
                </div>
                <Text 
                    className={styles.card__footer} 
                    size="es" color="gray" 
                    children="Вопрос 5-5" 
                />
            </div>
        </div>
    )
}

export default observer(Card_4);