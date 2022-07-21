import React from 'react'
import Envelop from './components/Envelop';

export default function App() {

    const fromPerson = {
        fullName: 'Julian Perge',
        address: '123 Blank Street',
        cityStateZip: 'Columbus, OH 43203',
      };
      
      const toPerson = {
        fullName: 'Perge Julian',
        address: '321 Blank Street',
        cityStateZip: 'San Francisco, CA 43204',
      };

    return (
        <div>
            <Envelop toPerson={toPerson} fromPerson={fromPerson}/>
        </div>
    )
}
