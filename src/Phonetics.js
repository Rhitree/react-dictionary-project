import React from "react";
import "./Dictionary.css";

export default function Phonetic (props) {
    return (
        <div className="Phonetic">
            <span>
                <a href= {props.phonetic.audio} target="_blank" rel="noreferrer">
                    Pronunciation
                </a>
                {props.phonetic.text}
            </span>
        </div>
    );
}