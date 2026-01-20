import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Synonym (props) {
    return (
        <div className="Meanings">
          <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                return(
                    <div key={index}>
                        <div className="definition">
                            <strong>Definition: </strong>{definition.definition}
                        </div>
                        <div className="example">
                            {definition.example}
                        </div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                );
            })}
      </div>
    );
}