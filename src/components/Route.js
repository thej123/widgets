import React, { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        // Let route keep listening for popstate listen to change and then trigger onLocation change
        window.addEventListener('popstate', onLocationChange)
        //remove the event listener incase route component is removed
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])
    
    return currentPath === path ? children : null
}

export default Route