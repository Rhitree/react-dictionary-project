import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword]  = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState([]);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePhotosResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

        let photosApiKey = "b3a37c1584b0oatf80a196c74f3071cb"
        let photosApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${photosApiKey}`
        axios.get(photosApiUrl).then(handlePhotosResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search()
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    search();
}

if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search"
                    autoFocus={true} 
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword} 
                    />
                </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}