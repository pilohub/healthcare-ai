import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
} from "react-leaflet";
import type { LatLngExpression, Icon } from "leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./status.css";

/* ---------------- FIX DEFAULT MARKER ICON ---------------- */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

/* ---------------- CUSTOM AMBULANCE ICON ---------------- */
const ambulanceIcon: Icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

/* ---------------- TYPES ---------------- */
type LatLngTuple = [number, number];

/* ---------------- CENTER ---------------- */
const center: LatLngTuple = [21.1702, 72.8311];

export default function Status() {
  const [position, setPosition] = useState<LatLngTuple>(center);
  const [eta, setEta] = useState<number>(15);

  /* ---------------- AMBULANCE MOVEMENT ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(([lat, lng]) => {
        const next: LatLngTuple = [
          lat + 0.0005,
          lng + 0.0005,
        ];
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- ETA COUNTDOWN ---------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setEta((prev) => (prev > 0 ? prev - 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* ---------------- RENDER ---------------- */
  return (
    <div className="status-page">
      <h1 className="title">🚑 Emergency Status</h1>

      <div className="status-card">
        <h2>Ambulance is on the way</h2>

        <div className="eta-box">
          ⏱ ETA: <span>{eta} mins</span>
        </div>

        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${Math.min((15 - eta) * 6.6, 100)}%`,
            }}
          />
        </div>

        <p className="note">
          Stay calm. Help is arriving shortly.
        </p>

        {/* MAP */}
        <MapContainer
          center={position as LatLngExpression}
          zoom={13}
          className="map"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <Marker
            position={position as LatLngExpression}
            icon={ambulanceIcon}
          />

          <Polyline
            positions={
              [center, position] as LatLngExpression[]
            }
            pathOptions={{ color: "blue", weight: 4 }}
          />
        </MapContainer>

        {/* DRIVER */}
        <div className="driver-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="driver-img"
            alt="driver"
          />

          <div>
            <h3>👨‍🚑 Ramesh Patel</h3>
            <p>⭐ 4.8 Rating</p>
            <p>📞 9876543210</p>

            <a href="tel:9876543210" className="call-btn">
              Call Driver
            </a>
          </div>
        </div>
      </div>

      {/* SOS */}
      <button className="sos-btn">
        🚨 SOS Emergency
      </button>
    </div>
  );
}