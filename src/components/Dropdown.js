import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    // To show/hide the dropdown
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            // if the click was done inside the ref component then dont call setOpen
            if (ref.current && ref.current.contains(event.target)){
                return;
            }
            console.log('body click')
            // console.log(event.target)
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick, {capture: true})

        // cleanup is the whole dropdown component is not shown. 
        // in our case because we are adding 'ref.current && ref.current.contains', this is not fully needed.
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    // To make sure it runs only once - []
    }, [])

    const renderedOptions = options.map((option) => {
        // To make sure selected item does not show in the dropdown
        if (option.value === selected.value){
            return null;
        }

        return (
            <div
             key={option.value} 
             className='item'
             // updated the selected dropdown
             onClick={() => {
                 console.log('item click')
                 onSelectedChange(option)
             }}
            >
                {option.label}
            </div>
        )
    })
    // console.log(ref.current)
    return (
        // 'ref' is used to make sure body listener does not get triggered inside the 'ui form' div
        <div ref={ref} className="ui form">
            <div className="field">
                <label htmlFor="" className="label">
                    Select a Color
                </label>
                <div
                 onClick={() => {
                     console.log('dropdown click')
                     setOpen(!open)
                 }} 
                //  To show/hide the dropdown
                 className={`ui selection dropdown ${open ? 'visible active': ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    {/* To show/hide the dropdown */}
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                <div style={{ color: selected.value }}>
                    <h1>The color is {selected.value}</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Dropdown