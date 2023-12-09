import "./App.css";
import GeoViwer from "./components/Geomap";
import Header from "./components/Header";
import AreaVolume from "./components/AreaVolume";

function App() {
  return (
    <div className="App">
      
      <Header />
      <AreaVolume></AreaVolume>
      <GeoViwer /> 
      
    </div>
  );
}

export default App;
