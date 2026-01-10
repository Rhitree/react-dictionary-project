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
        <div className="col-8">Dictionary App</div>
        </div>
      </header>
          <main>
           <Dictionary />
         </main>
         <footer>
            <div className="row">
                <div className="col-9">
                  Coded by Rhian Jenkins, open sourced on Github and hosted on Netlify
                  </div>
                  <div className="col-3">
                  <img src={quill}
                  className="quill"
                  alt="quill" />
                </div>
            </div>
          </footer>
    </div>
  );
}
