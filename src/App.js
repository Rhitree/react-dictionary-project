import './App.css';
import logo from "./logo.png";

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
    </div>
  );

}
