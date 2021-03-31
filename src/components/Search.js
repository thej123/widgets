import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])


    // console.log('i run with every render')
    // useEffect(() => {
    //     console.log('I only run once')
    // }, [])
    // useEffect(() => {
    //     console.log('I run after every render and first time')
    // })
    // useEffect(() => {
    //     console.log('I run after "term" changes and first time')
    //     // If we return function in useEffect - then this function gets called the next time useEffect is triggered i.e the next render
    //     return () => {
    //         console.log('CLEANUP')
    //     }
    // }, [term])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }
        search()
    }, [debouncedTerm])

    // useEffect(() => {
    //     // console.log('I run after "term" changes and first time')
    //     // Method 1 of creating a await function and calling it
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })
    //         setResults(data.query.search)
    //     }
    //     // initial api called is done instantly
    //     if (term && !results.length){
    //         search()
    //     } else {
    //         // next api calls are made after user pauses for 500ms
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search()
    //             }
    //         }, 500)
            
    //         // removes the setTimeout timer (resets the clock) next time useEffect is triggered
    //         return () => {
    //             clearTimeout(timeoutId)
    //         }
    //     }

    //     // Method 2:
    //     // (async () => {
    //     //     await axios.get('api_endpoint')
    //     // })();

    //     // Method 3:
    //     // axios.get('api_endpoint')
    //     //     .then((response) => {
    //     //         console.log(response.data)
    //     //     })

    // }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                     className="input" 
                     type="text"
                     value={term}
                     onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search