"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const position: [number, number] = [13.657668, 100.661151];

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

function CenterMapOnMarker({ position }: { position: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [map, position]);
  return null;
}

export default function LeafletMap() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full rounded-xl"
    >
      <CenterMapOnMarker position={position} />
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div className="text-sm font-semibold text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=13.657668,100.661151"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              VIGLOBALIZE
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
