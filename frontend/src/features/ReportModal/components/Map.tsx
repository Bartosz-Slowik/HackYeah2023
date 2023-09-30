import { useState } from "react";
import Map, {
  MapLayerMouseEvent,
  Marker,
  ViewStateChangeEvent,
} from "react-map-gl/maplibre";
import getIcon from "utils/animals";

interface Props {
  coordinates?: [number, number];
  setCoordinates: (coordinates: [number, number]) => void;
  animal: string;
}

const SelectMap = ({ coordinates, setCoordinates, animal }: Props) => {
  const [viewState, setViewState] = useState({
    longitude: 19.941015236678783,
    latitude: 50.06301434728838,
    zoom: 13,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const onMoveHandler = (evt: ViewStateChangeEvent) => {
    setViewState(evt.viewState);
  };

  const handleMapClick = (event: MapLayerMouseEvent) => {
    setCoordinates([event.lngLat.lat, event.lngLat.lng]);
  };
  return (
    <Map
      onClick={handleMapClick}
      mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=u0kFdoythHBvPdgFbgqj"
      cursor="default"
      {...viewState}
      onMove={onMoveHandler}
    >
      {coordinates && (
        <Marker
          longitude={coordinates[1]}
          latitude={coordinates[0]}
          anchor="center"
        >
          <img src={getIcon(animal)} className="w-10 h-10" />
        </Marker>
      )}
    </Map>
  );
};

export default SelectMap;
