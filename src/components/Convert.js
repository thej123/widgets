import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        // console.log('new language/text')
        // second argument is for body info - which we leave empty
        const doTranslation = async () => {
            // const res = await axios.post('https://translation.googleapis.com/language/translate/v2', 
            // using destructing to get the data object from response
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', 
                {}, 
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }
            )
            // first data is the responses data. second data is from the google apis data object
            // setTranslated(res.data.data.translations[0].translatedText)
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, debouncedText])


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert