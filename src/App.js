import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'Shade of Blue',
        value: 'blue'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            {/* <Accordion items={items}></Accordion> */}
            {/* <Search></Search> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown
                selected={selected} 
                options={options}
                onSelectedChange={setSelected}
                /> : null
            }
        </div>
    )
}