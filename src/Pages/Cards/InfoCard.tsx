import * as React from 'react';
import { useEffect, useState } from 'react';
import Spinner from './Spinner/Spinner';
import styles from './Cards.module.scss';
import infoStyles from './Info.module.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import UserData from './UserData/UserData';
import RootStore from '../../Store';
import { observer } from 'mobx-react-lite';

const Info = (): JSX.Element => {
    const [ isShow, setIsShow ] = useState<boolean>(false);

    const handlerInfo = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        // evt.preventDefault();
        setIsShow(true);
    }

    useEffect(() => {
        setIsShow(false)
    }, [RootStore.apiData])

    if (isShow) {
        return <Spinner />
    }

    return (
        <div className={infoStyles.info}>
            <div className={styles.card__info}>
            <Text 
                size='s' 
                color='black' 
                children="Спасибо за Ваши ответы!" 
            />
            <Text 
                size='s' 
                color='black' 
                children={<b>Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</b>} 
            />
            </div>
            <div className={infoStyles.info__text}>
            <Text 
                size='s' 
                color='white' 
                children="Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем." 
            />
            </div>
            <div className={infoStyles.info__block}>
                <Text 
                    className={infoStyles.info__big} 
                    size='m' 
                    color='gold' 
                    children="Первое значимое событие может произойти уже 14.02.2021," 
                />  
                <Text 
                    size='m' 
                    color='gold' 
                    children="Вам надо быть готовым, что бы последствия не оказались необратимыми."
                />
            </div>
            <div className={infoStyles.info__text}>
            <Text 
                size='s' 
                color='white' 
                children="Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!" 
            />
            </div>  

            <Button 
                appearance="green"
                children="Позвонить и прослушать"
                onClick={() => RootStore.showData} 
            />
            { RootStore.openData && <UserData />}
            <div className={infoStyles.info__footer}>
            <Text 
                size='es' 
                color='gray' 
                children="TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI" 
            />
            </div>
            
        </div>
    )
}

export default observer(Info);