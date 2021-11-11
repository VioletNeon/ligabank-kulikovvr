import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from '../../../node_modules/leaflet/dist/leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import {cityPoints, CenterPointMap} from '../../mocks/mocks';
import useMap from '../../hooks/use-map/use-map';

const customIcon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [29, 33],
  iconAnchor: [14.5, 33],
});

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

Map.propTypes = {
  mapRef: PropTypes.object.isRequired,
};

export default Map;
