import * as React from 'react';
import Text from '../../../components/Text/Text';
import styles from './Spinner.module.scss';

const Spinner = (): JSX.Element => {
    return (
        <div className={styles.spinner_block}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Text size='s' color='gray' children="Loading" />
        </div>
    )
}

export default Spinner;