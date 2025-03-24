import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Hardcoded list of latitude and longitude points
const locations = [
    { lat: 31.5204, lng: 74.3587, name: "Badshahi Mosque" },
    { lat: 31.5925, lng: 74.3095, name: "Lahore Fort" },
    { lat: 31.5497, lng: 74.3436, name: "Minar-e-Pakistan" },
    { lat: 31.5656, lng: 74.3292, name: "Walled City of Lahore" },
    { lat: 31.5247, lng: 74.3483, name: "Lahore Museum" },
    { lat: 31.5146, lng: 74.3442, name: "Emporium Mall" },
    { lat: 31.4902, lng: 74.2681, name: "Jallo Park" },
    { lat: 31.4722, lng: 74.4056, name: "Wagah Border" },
    { lat: 31.5492, lng: 74.3433, name: "Iqbal Park" },
    { lat: 31.5206, lng: 74.3347, name: "Anarkali Bazaar" },
  ];

function LeafLet() {
  return (
    <MapContainer center={[31.5204, 74.3587]} zoom={6} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LeafLet;

// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import axios from 'axios';
// import 'leaflet/dist/leaflet.css';

// // Fix for missing marker icons
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
// });

// const geocodeAddress = async (address) => {
//   try {
//     const response = await axios.get(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
//     );
//     if (response.data && response.data.length > 0) {
//       const { lat, lon } = response.data[0];
//       return { latitude: parseFloat(lat), longitude: parseFloat(lon), address };
//     }
//     return null;
//   } catch (error) {
//     console.error("Error geocoding address:", error);
//     return null;
//   }
// };

// const LeafLet = ({ addresses }) => {
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     const fetchCoordinates = async () => {
//       const geocodedMarkers = [];
//       for (const address of addresses) {
//         const coordinates = await geocodeAddress(address);
//         if (coordinates) {
//           geocodedMarkers.push(coordinates);
//         }
//       }
//       setMarkers(geocodedMarkers);
//     };

//     fetchCoordinates();
//   }, [addresses]);

//   return (
//     <MapContainer center={[31.5204, 74.3587]} zoom={13} style={{ height: "400px", width: "100%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {markers.map((marker, index) => (
//         <Marker key={index} position={[marker.latitude, marker.longitude]}>
//           <Popup>{marker.address}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default LeafLet;