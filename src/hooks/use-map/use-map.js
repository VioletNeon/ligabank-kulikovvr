import {useEffect, useState} from 'react';
import leaflet from '../../../node_modules/leaflet/dist/leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
        zoomControl: true,
        marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    } else if (mapRef.current !== null) {
      map.setView(new leaflet.LatLng(city.latitude, city.longitude), city.zoom);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
