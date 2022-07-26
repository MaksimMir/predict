import * as React from 'react';
import Text from '../../components/Text/Text';
import styles from './Center.module.scss';

const Content = () => {
    return (
        <div className={styles.content}>
            <div className="container col">
                <div className={styles.content__top}>
                    <Text size='m' color='white' children="Позвольте нам раскрыть эту волнующую тайну и" /> 
                    <Text className={styles.content__text} size='m' color='gold' children="с точностью определить дату и время вашей смерти," />
                    <Text size='m' color='white' children="а также предшествующую этому событию причину" />
                </div>
                <div className={styles.content__bottom}>
                    <Text size='m' color='white' children="Многие не верят предсказаниям и мы решили доказать каждому," />
                    <Text className={styles.content__text} size='m' color='gold' children="что прогноз может изменить жизнь любого человека!" />
                </div>
            </div>
        </div>
    )
}

export default Content;