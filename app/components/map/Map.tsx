'use client';

import leaflet from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { MapContainerStyled } from '@/app/components/map/styles';

// @ts-ignore
delete leaflet.Icon.Default.prototype._getIconUrl;

leaflet.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

type MapProps = {
  center: string[];
};

const Map = ({ center }: MapProps) => {
  return (
    <MapContainerStyled
      center={(center as unknown as leaflet.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {center && (
        <Marker position={center as unknown as leaflet.LatLngExpression} />
      )}
    </MapContainerStyled>
  );
};

export default Map;
