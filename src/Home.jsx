import './Home.css';
import headerImage from "./images/taj-mahal.png";
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/>
        <div className="header-image">
        <img src={headerImage}/>
        </div>
      </header>
    </div>
  );
}

export default App;
