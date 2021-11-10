import React, {useEffect} from 'react';
import leaflet from '../../../node_modules/leaflet/dist/leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map/use-map';

const customIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [29, 33],
  iconAnchor: [14.5, 33],
});

const CenterPointMap = {
  latitude: 56.751934,
  longitude: 60.691237,
  zoom: 5,
};

const cityPoints = [
  {
    name: 'Москва',
    latitude: 55.761590,
    longitude: 37.609460,
  },
  {
    name: 'Казань',
    latitude: 55.796244,
    longitude: 49.111876,
  },
  {
    name: 'Саратов',
    latitude: 51.532522,
    longitude: 46.036481,
  },
  {
    name: 'Тюмень',
    latitude: 57.152272,
    longitude: 65.532796,
  },
  {
    name: 'Омск',
    latitude: 54.989792,
    longitude: 73.374340,
  }
];

function Map({mapRef}) {
  const map = useMap(mapRef, CenterPointMap);

  useEffect(() => {
    const markers = [];
    if (map) {
      cityPoints.forEach((point) => {
        markers.push(
          leaflet
            .marker({
              lat: point.latitude,
              lng: point.longitude,
            }, {
              icon: customIcon,
            })
            .addTo(map),
        );
      });
    }
    return () => {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });
    };
  }, [map]);

  return (
    <section className="map">
      <h2 className="map__tittle">Отделения Лига Банка</h2>
      <div className="map__wrapper">
        <div
          id="map"
          style={{height: '100%'}}
          ref={mapRef}
        >
        </div>
      </div>
    </section>
  );
}

export default Map;
