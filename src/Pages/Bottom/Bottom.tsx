import { Link } from 'react-router-dom';
import * as React from 'react';
import styles from './Bottom.module.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';

interface IScroll {
    scrollPage: (id: string) => void;
}

const Footer = ({scrollPage}: IScroll): JSX.Element => {

    const clickFromScroll = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        const id = evt.currentTarget.dataset.id;
        scrollPage(id);
    }
    return (
        <footer className={styles.footer}>           
            <div className="container col">
                <Text 
                    className={styles.footer__title} 
                    size='l' 
                    color='gold' 
                    children="Боитесь ли вы умереть?" />
                <div className={styles.footer__btns}>
                    <Link to="/card1">
                        <Button appearance='gold__1' children="Да" />
                    </Link>                        
                    <Button 
                        appearance='gold__3' 
                        children="Нет" 
                        data-id='2'
                        onClick={clickFromScroll}
                        />

                    <Text 
                        className={styles.footer__ask} 
                        size='es' 
                        color='gray' 
                        children="Вопрос 1-5" />
                </div>
                <div className={styles.footer__block}>
                    <Text 
                        size='l' 
                        color='white' 
                        fontStyle='bad' 
                        children="Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут." />
                </div>
            </div>
        </footer>
    )
}

export default Footer;