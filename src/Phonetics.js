import React from "react";
import "./Dictionary.css";

export default function Phonetic (props) {
    return (
        <div className="Phonetic">
            <span>
                <button>
                    <a href= {props.phonetic.audio} target="_blank" rel="noreferrer">
                        🔊
                    </a>
                </button>
                <br />
                {props.phonetic}
            </span>
        </div>
    );
}