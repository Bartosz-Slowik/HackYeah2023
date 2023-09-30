import getIcon, { animals } from "utils/animals";

interface Props {
  animal: string;
  setAnimal: (animal: string) => void;
}

const Selector = ({ animal: selected, setAnimal }: Props) => {
  return (
    <div className="flex gap-2 w-full overflow-auto">
      {animals.map((animal) => (
        <div
          key={animal}
          className={`w-10 h-10 p-1 rounded-full overflow-hidden box-border ${
            selected === animal ? "border-2 border-blue-500" : ""
          }`}
        >
          <img
            src={getIcon(animal)}
            className="w-full h-full object-cover"
            onClick={() => setAnimal(animal)}
          />
        </div>
      ))}
    </div>
  );
};

export default Selector;
