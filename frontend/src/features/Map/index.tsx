import { useState } from "react";
import Map, { ViewStateChangeEvent } from "react-map-gl/maplibre";

const MainMap = () => {
  const [viewState, setViewState] = useState({
    longitude: 19.941015236678783,
    latitude: 50.06301434728838,
    zoom: 13,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const onMoveHandler = (evt: ViewStateChangeEvent) => {
    setViewState(evt.viewState);
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <Map
        {...viewState}
        onMove={onMoveHandler}
        mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=u0kFdoythHBvPdgFbgqj"
      ></Map>
    </div>
  );
};

export default MainMap;
