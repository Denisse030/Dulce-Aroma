import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { recommendationsData } from "../assets/assets";

function RecenterMap({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], 15);
  return null;
}

const Recommendations = () => {
  const [selectedCafe, setSelectedCafe] = useState(recommendationsData[0]);

  return (
    <div id="Recommendations" className="container mx-auto p-14 md:p-20 w-full bg-[#f9dfca] rounded-2xl shadow-md shadow-[#8f564530] flex flex-col items-center mt-10">
      <h1 className="text-2xl sm:text-4xl font-serif text-[#8f5645] font-bold tracking-wide">
        Cafe Recommendations
      </h1>
      <div className="h-1 w-16 bg-[#c29b86] rounded-full mt-2 mb-6"></div>
      <p className="text-[rgb(143,86,69)] max-w-88 text-center leading-relaxed mb-10">
        Curated list of personal favorite cafe spots.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">{recommendationsData.map((cafe, index) => (
          <div key={index} onClick={() => setSelectedCafe(cafe)} className={`cursor-pointer p-5 rounded-xl shadow-md transition ${selectedCafe.name === cafe.name ? "bg-[#e8d6c9] shadow-[#8f5645]" : "bg-white"}`}>
            <h3 className="text-xl font-serif text-[#8f5645] font-semibold">
              {cafe.name}
            </h3>
            <p className="text-sm text-[#8f5645] opacity-80">{cafe.address}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-6">
        <MapContainer center={[selectedCafe.lat, selectedCafe.lng]} zoom={14} scrollWheelZoom={false}className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <RecenterMap lat={selectedCafe.lat} lng={selectedCafe.lng} />
          {recommendationsData.map((cafe, index) => (
            <Marker key={index} position={[cafe.lat, cafe.lng]}>
              <Popup>
                <b>{cafe.name}</b>
                <br />
                {cafe.address}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-serif text-[#8f5645] font-bold mb-1">Favorite Drink at {selectedCafe.name}</h2>
        <p className="text-[#8f5645] text-lg italic">{selectedCafe.favoriteDrink}</p>
      </div>
    </div>
  );
};

export default Recommendations;
