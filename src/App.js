import "./App.css";
import GeoViwer from "./components/Geomap";
import Header from "./components/Header";
import AreaVolume from "./components/AreaVolume";
import Comparison from "./components/Comparison";


function App() {
  return (
    <div className="App">
      
      <Header />
      <AreaVolume></AreaVolume>
      <Comparison/>
      <GeoViwer /> 
      
    </div>
  );
}

export default App;
