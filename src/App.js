import './App.css';
import logo from "./logo.png";
import quill from "./quill.png"
import Dictionary from "./Dictionary.js"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-4">
          <img src={logo}
        className="App-logo"
        alt="logo" />
        </div>
          <div className="col-8">
             <h1 className="App-Header">Dictionary App</h1>
          </div>
        </div>
      </header>
          <main>
            <h3 className="App-H3">Search for word definitions, pronunciations and more</h3>
           <Dictionary />
         </main>
         <footer>
                  Coded by Rhian Jenkins, open sourced on Github and hosted on Netlify
          </footer>
    </div>
  );
}
