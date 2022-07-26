import * as React from 'react'
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Card_1 from './Pages/Cards/Card_1';
import Card_2 from './Pages/Cards/Card_2';
import Card_3 from './Pages/Cards/Card_3';
import Card_4 from './Pages/Cards/Card_4';
import SoundMessage from './Pages/Cards/SoundMessage/SoundMessage';
import Info from './Pages/Cards/InfoCard';

const App = (): JSX.Element => {
    document.body.removeAttribute('id');
    return (
        <Routes>
            <Route index element={<Main />} />
            <Route path='card1' element={<Card_1 />} />
            <Route path='card2' element={<Card_2 />} />
            <Route path='card3' element={<Card_3 />} />
            <Route path='card4' element={<Card_4 />} />
            <Route path='sound' element={<SoundMessage />} />
            <Route path='info' element={<Info />} />
        </Routes>
    )
}

export default App;