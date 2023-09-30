import { useAppSelector } from "hooks/redux-hooks";
import { useState } from "react";
import { Marker } from "react-map-gl";
import Map, { ViewStateChangeEvent } from "react-map-gl/maplibre";
import getIcon from "utils/animals";

const MainMap = () => {
  const reports = useAppSelector((state) => state.reports.reports);

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
      >
        {reports.map((report) => (
          <Marker
            key={report.id}
            longitude={report.location.coordinates[0]}
            latitude={report.location.coordinates[1]}
            anchor="center"
          >
            <img src={getIcon(report.animal)} className="w-10 h-10" />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default MainMap;
