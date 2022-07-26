import * as React from "react";
import styles from './UserData.module.scss';
import RootStore from '../../../Store';
import { observer } from 'mobx-react-lite';

interface UD {
    birth_year?: string,
    created?: string,
    edited?: string,
    eye_color?: string,
    films?: string[],
    gender?: string,
    hair_color?: string,
    height?: string,
    homeworld?: string,
    mass?: string,
    name?: string,
    skin_color?: string,
    species?: string[],
    starships?: string[],
    url?: string,
    vehicles?: string[]
}

const UserData = () => {
    const [ baseData, setBaseData ] = React.useState<UD>({})
    const data = new Promise(( res, rej) => {
        res(RootStore.apiData)
    })
    
    data.then((result: UD) => setBaseData(result));

    return (
        <table className={styles.table}>
            <tbody>
                <tr className={styles.table__tr}>
                    <td className={styles.table__td}>Name</td>
                    <td className={styles.table__td}>{ baseData.name }</td>
                </tr>
                <tr className={styles.table__tr}>
                    <td className={styles.table__td}>Age</td>
                    <td className={styles.table__td}>
                        { baseData.birth_year?.slice(0, 2) }
                    </td>
                </tr>
                <tr className={styles.table__tr}>
                    <td className={styles.table__td}>Height</td>
                    <td className={styles.table__td}>
                        { baseData.height }
                    </td>
                </tr>
                <tr className={styles.table__tr}>
                    <td className={styles.table__td}>Mass</td>
                    <td className={styles.table__td}>
                        { baseData.mass }
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default observer(UserData);