import React, { useState } from 'react';

const Accordion = ({ items }) => {
    //setting up the state
    // array destructuring
    /*
    const colors = ['red', 'greeen']

    const redColor = color[0]
    const greenColor = color[1]
    
    const [firstElement, secondElement] = colors
    console.log(firstElement) // red
    console.log(secondElement) // green

    const things = useState(null)
    const activeIndex = things[0]
    const setActiveIndex = things[1]
    */
    // simplifed
    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active': ''

        return (
            <React.Fragment key={item.title}>
                <div 
                //  className={"title" + active}
                 className={`title + ${active}`}
                 onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
            {/* <h1>{activeIndex}</h1> */}
        </div>
    )
}

export default Accordion