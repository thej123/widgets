import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';

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

// const showAccordion = () => {
//     if (window.location.pathname === '/') {
//         return <Accordion items={items} />
//     }
// }
// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />
//     }
// }
// const showDropdown = () => {
//     // if (window.location.pathname === '/dropdown') {
//     //     return <Dropdown
//     //     selected={selected} 
//     //     options={options}
//     //     onSelectedChange={setSelected}
//     //     />
//     // }
//     if (window.location.pathname === '/dropdown') {
//         return <Dropdown />
//     }
// }
// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Translate />
//     }
// }
// Turning the above 4 methods into 1 method
// but this is not react way! We create the Route.js for it
// const showComponent = (route, component) => {
//     return window.location.pathname === route
//      ? component 
//      : null;
// }

export default () => {
    const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            <Header />
            <Route path="/">
                {/* This is the 'children' */}
                <Accordion items={items}></Accordion>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                 label="Select a Color"
                 selected={selected} 
                 options={options}
                 onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            {/* {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()} */}
            {/* <Accordion items={items}></Accordion> */}
            {/* <Search></Search> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown
                selected={selected} 
                options={options}
                onSelectedChange={setSelected}
                /> : null
            } */}
            {/* <Translate /> */}
        </div>
    )
}