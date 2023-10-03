import SelectMap from "./components/Map";
import { useState } from "react";
import Selector from "./components/Selector";
import { MdCancel } from "react-icons/md";
import { useAppDispatch } from "hooks/redux-hooks";
import { reportsActions } from "store/reports-slice";

interface Props {
  onClose: () => void;
}

const ReportModal = ({ onClose }: Props) => {
  const dispatch = useAppDispatch();
  const [animal, setAnimal] = useState("fox");
  const [coordinates, setCoordinates] = useState<
    [number, number] | undefined
  >();
  const [photo, setPhoto] = useState<File | undefined>(undefined);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPhoto(file);
  };

  const handleSubmit = () => {
    if (!coordinates || !animal || !photo) return;
    dispatch(
      reportsActions.addReport({
        id: Math.random().toString(),
        title: "",
        description: "",
        animal,
        location: { coordinates: [coordinates[1], coordinates[0]] },
        image: URL.createObjectURL(photo),
      })
    );
    onClose();
  };

  return (
    <div className="w-full h-screen">
      <SelectMap
        animal={animal}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <div className="fixed flex flex-col p-4 gap-2 rounded-t-2xl bottom-0 w-full sm:w-[600px] sm:left-1/2 sm:-translate-x-1/2 z-10 bg-white text-gray-800">
        <div className="h-0 w-full relative">
          <MdCancel
            className="absolute right-0 top-0 h-8 w-8 cursor-pointer text-gray-600"
            onClick={onClose}
          />
        </div>
        <h1 className="font-medium -mt-2">Report animal</h1>
        <h2 className="text-sm font-medium">Select animal</h2>
        <Selector animal={animal} setAnimal={setAnimal} />
        <h2 className="text-sm font-medium">Add photo (optional)</h2>
        <div
          className={
            "relative w-full rounded-lg overflow-hidden " +
            (photo ? "h-20" : "h-10")
          }
        >
          {photo && (
            <img
              src={URL.createObjectURL(photo)}
              alt="photo"
              className="h-full w-full object-cover"
            />
          )}
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#0000006c] font-medium text-white">
            Click to select file.
          </div>
          <input
            type="file"
            accept=".jpeg,.jpg,.png,.gif"
            onChange={handlePhotoChange}
            className="absolute z-20 top-0 left-0 h-full w-full cursor-pointer opacity-0"
            multiple={false}
          />
        </div>
        <button
          className="rounded-lg w-full bg-blue-600 text-white flex justify-center items-center p-2 font-medium disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!coordinates || !animal}
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ReportModal;
