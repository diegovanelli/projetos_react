import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import SeosonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


const App = () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrorMessage(err)
        );
    }, []);

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>
    } else if (lat) {
        content = <SeosonDisplay lat={lat} />
    } else {
        content = <Spinner message="Please accept location request " />
    }

    return (
        <div className="border red">
            {content}
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))