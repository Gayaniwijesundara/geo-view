import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import coodinations from "../assets/coodinations.json";
import "../styles/Geomap.css"


const center = [6.18530499, 81.23883863];

const onEachPolygon = (feature, layer) => {
  const countryName = feature.properties.Name;
  const area = feature.properties.Area;
 

  layer.bindPopup(`<h4>Field Location:${countryName}</h4>`);
  layer.options.fillColor = "light green";
  layer.options.fillOpacity = 0.2;
  layer.options.weight = 1;
  layer.options.color = "blue";
};

const GeoViwer = () => {
  return (
    <div className="MapViwer">
      <MapContainer
        center={center}
        zoom={16.2}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=Y1poX1TfZydW5s8DOc36"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <GeoJSON
          data={coodinations.features}
          onEachFeature={onEachPolygon}
        ></GeoJSON>
      </MapContainer>
    </div>
  );
};

export default GeoViwer;
