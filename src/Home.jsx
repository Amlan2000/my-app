import ImageGrid from './Components/ImageGrid/ImageGrid'
import './Home.css';
import headerImage from "./images/taj-mahal.png";
import Navbar from "./Components/Navbar/Navbar"
import Ministers from './Components/Ministers/Ministers'


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/>
        <div className="header-image">
        <img src={headerImage}/>
        </div>
      </header>
      <ImageGrid></ImageGrid>
      <Ministers></Ministers>
    </div>
  );
}

export default App;
