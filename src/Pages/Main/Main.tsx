import * as React from 'react';
import Top from '../Top/Top';
import Center from '../Center/Center';
import Bottom from '../Bottom/Bottom';

const Main = (): JSX.Element => {

    const scrollPage = (id: string): void => {
        switch (id) {
            case '1':
                window.scrollBy({top: 400, behavior: 'smooth'});
                break;
            case '2':
                window.scrollBy({top: -1900, behavior: 'smooth'});
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Top scrollPage={scrollPage} />
            <Center />
            <Bottom scrollPage={scrollPage} />
        </>
    )
}

export default Main;