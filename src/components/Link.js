import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // to make sure cmnd+click (mac) or ctrl+click (windows) - opens a new tab
        if (event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault()
        window.history.pushState({}, '', href)

        // this communicates to route elements that the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }

    return <a onClick={onClick} href={href} className={className}>{children}</a>
}

export default Link