import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props) {
    let [keyword, setKeyword]  = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState([]);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiKey = `b3a37c1584b0oatf80a196c74f3071cb`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey ="ozZf2v8mtOfAXNlDtC6vD6f5rv51XfK7OTGJyuCGXNvy9NGyu3nnbnA8";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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