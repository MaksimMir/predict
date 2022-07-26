import { useEffect, useState } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import RootStore from '../../Store'
import { observer } from 'mobx-react-lite';

const month: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const years: number[] = [];
const days: number[] = [];
const createDey = (): void => {
    for (let i = 1; i <= 31; i++) {
        days.push(i)
    }
}
const createYear = (): void => {
    for (let i = 1940; i <= 2020; i++) {
        years.push(i)
    }
}

createDey();
createYear();

interface ErrorObject {
    day: boolean
    month: boolean;
    year: boolean;
}

const Card_2 = (): JSX.Element => {
    const { userParams } = RootStore;

    const [ day, setDay ] = useState<string>('');
    const [ mon, setMon ] = useState<string>('');
    const [ year, setYear ] = useState<string>('');
    const [ isError, setIsError ] = useState<ErrorObject>({
                                                day: true,
                                                month: true,
                                                year: true
                                            });
    const [ isValid, setIsValid ] = useState<boolean>(false);


    const handlerDays = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        setDay(evt.target.value);
        setIsError({...isError, day: false});
    }

    const handlerMonths = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        setMon(evt.target.value);
        setIsError({...isError, month: false});
    }

    const handlerYears = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        setYear(evt.target.value);
        setIsError({...isError, year: false});
    }

    const handlerBlur = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
        switch (evt.target.name) {
            case 'days':
                if (day === '') {
                    setIsError({...isError, day: true}); 
                }
                break;
            case 'months':
                if (mon === '') {
                    setIsError({...isError, month: true});
                }
                break;
            case 'years':
                if (year === '') {
                    setIsError({...isError, year: true});
                }
                break;
            default:
                break;
        }
    }

    const handlerDate = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        const dataName = evt.currentTarget.dataset.name;
        const monthNumber = month.indexOf(mon) + 1;
        const birthday = new Date(`${year}-${monthNumber}-${day}`).getFullYear()
        const now = new Date().getFullYear();
        const age = now - birthday;

        const date = {
            age,
            dateOfBirthday: `${year}-${monthNumber}-${day}`
        }

        userParams.addData(dataName, date);
    }

    useEffect(() => {       
        const err = Object.values(isError).every(el => el === false);
        setIsValid(err);
    }, [isError])

    return (
        <div className={styles.card}>
            <div className={styles.card__top}>
            <Text 
                className={styles.card__text} 
                size='s' 
                color='gray' 
                fontStyle='bad' 
                children="Уже совсем скоро Вы узнаете много интересного о своем будущем!" 
            />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__title}>
                <Text 
                    size='l' 
                    color="gold" 
                    children="Укажите свою дату рождения:" 
                />
                </div>
                <div className={styles.card__btns}>
                    <select className={cn(styles.card__input, (isError.day && styles.err))} 
                        name="days"                                
                        value={day}
                        onChange={handlerDays}
                        onBlur={handlerBlur}>
                            <option label="Day"></option>
                            {days.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}
                    </select>
                    <select className={cn(styles.card__input, (isError.month && styles.err))} 
                        name="months"
                        value={mon}
                        onChange={handlerMonths}
                        onBlur={handlerBlur}>
                            <option label="Month"></option>
                            {month.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}                           
                    </select>
                    <select className={cn(styles.card__input, (isError.year && styles.err))} 
                        name="years"
                        value={year}
                        onChange={handlerYears}
                        onBlur={handlerBlur}>
                            <option label="Year"></option>
                            {years.map((item, i) => {
                                return (
                                    <option 
                                    key={i} 
                                    >{item}</option>
                                )
                            })}                           
                    </select>
                    { isValid ? <Link to="/card3">
                    <Button 
                        appearance='gold__1' 
                        children="Далее" 
                        data-name="date"
                        onClick={handlerDate} 
                    />         
                    </Link> : null }
                </div>
                <Text 
                    className={styles.card__footer} 
                    size='es' 
                    color='gray' 
                    children="Вопрос 3-5" 
                />
            </div>
        </div>
    )
}

export default observer(Card_2);