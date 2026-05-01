import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 23.0225,
  lng: 72.5714, // Ahmedabad
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDyaQ_GPmT8VPJ_jBWanf1DvcZHBdyK3f0">
      <GoogleMap mapContainerStyle={{ height: "400px", width: "100%" }} center={center} zoom={12}>
        
        {/* Example hospital markers */}
        <Marker position={{ lat: 23.03, lng: 72.58 }} />
        <Marker position={{ lat: 23.01, lng: 72.56 }} />

      </GoogleMap>
    </LoadScript>
  );
}