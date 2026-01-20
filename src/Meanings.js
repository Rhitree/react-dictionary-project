import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
          <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) 
            {                
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>{definition.definition}
                            <br />
                            <strong>Example:</strong>
                            <em>{props.meaning.examples}</em>
                            <br />
                            <span><strong className="synonym">Synonyms:</strong><Synonyms synonyms={props.meaning.synonyms} /></span>
                        </p>
                    </div>
                );
            })}
      </div>
    );
}