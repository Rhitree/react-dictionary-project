import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";
import "./Dictionary.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
          <h3>{props.meaning.partOfSpeech}</h3>

                    <div className="definition">
                        <strong>Definition: </strong>
                        {props.meaning.definition}
                    </div>

                    <div className="example">
                        <strong>Example: </strong>
                        {props.meaning.example}
                    </div>

                    <span>
                        <strong className="synonym">Synonyms: </strong>
                        <Synonyms synonyms={props.meaning.synonyms} />
                    </span>

                    <hr />
                </div>
            );
}