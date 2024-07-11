import './Home.css';
import headerImage from "./images/taj-mahal.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* navbar */}
        <div className="header-image">
        <img src={headerImage}/>
        </div>
      </header>
    </div>
  );
}

export default App;
