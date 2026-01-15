import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword]  = useState("")

    function handleResponse(response) {
    }

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiKey = "b3a37c1584b0oatf80a196c74f3071cb"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`
        axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search"
                autoFocus={true} 
                onChange={handleKeywordChange} 
                />
            </form>
        </div>
    );
}