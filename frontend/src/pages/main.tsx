import MainMap from "features/Map";
import { useAppDispatch } from "hooks/redux-hooks";
import { useEffect, useState } from "react";
import { fetchReports } from "store/reports-actions";
import addIcon from "assets/image 7.svg";
import ReportModal from "features/ReportModal";
import getIcon, { animals } from "utils/animals";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const [newReportModalOpen, setNewReportModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchReports());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const splashScreen = animals[Math.floor(Math.random() * animals.length)];
  console.log(splashScreen);

  return (
    <div className="relative w-full h-screen bg-gray-400">
      {loading && (
        <div className="z-50 w-full h-screen absolute bg-white flex flex-col justify-center items-center">
          <div className="relative flex flex-col">
            <img
              src={getIcon(splashScreen)}
              className="w-20 h-20 z-10 animate-bounce"
            />
            <div className="absolute bottom-0 -z-10 w-20 h-4 bg-gray-300 rounded-[50%] translate-y-1/2 animate-pulse"></div>
          </div>
        </div>
      )}
      {!newReportModalOpen && (
        <>
          <MainMap />
          <button
            className="z-10 absolute bottom-6 right-6 p-4 font-semibold drop-shadow-lg bg-white text-white rounded-full"
            onClick={() => setNewReportModalOpen(true)}
          >
            <img src={addIcon} className="w-8 h-8 drop-shadow-2xl" />
          </button>
        </>
      )}
      {newReportModalOpen && (
        <ReportModal onClose={() => setNewReportModalOpen(false)} />
      )}
    </div>
  );
};

export default Main;
