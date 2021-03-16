import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'Front end framework'
    },
    {
        title: 'Why use React?',
        content: 'Favorite JS amoung engineers'
    },
    {
        title: 'How to use React?',
        content: 'By creating components'
    }
]

export default () => {
    return (
        <div>
            <Accordion items={items}></Accordion>
        </div>
    )
}