import * as React from 'react';
import styles from './SoundMessage.module.scss';
import Text from '../../../components/Text/Text';
import sound from '../../../Sound/begin.mp3';

const SoundMessage = (): JSX.Element => {
    const myAudio = new Audio();
    myAudio.src = sound;
    
    React.useEffect(() => {
        myAudio.play()
        return () => {
            myAudio.pause();
        }
    }, [])
    return (
        <div className={styles.sound}>
            <div className={styles.sound__mic}></div>
            <div className={styles.sound__bar}></div>
            <Text size='s' color='gray' children="20%" />
            <Text size='s' color='gray' children="Запись сообщения" />
        </div>
    )
}

export default SoundMessage;