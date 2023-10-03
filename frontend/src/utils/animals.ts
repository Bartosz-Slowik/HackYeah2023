import fox from "assets/image 2.svg";
import cat from "assets/image 4.svg";
import hog from "assets/image 5.svg";
import elk from "assets/image 6.svg";
import beaver from "assets/image 7.svg";
import bear from "assets/image 8-2.svg";

export const animals = ["fox", "cat", "hog", "elk", "beaver", "bear"];

export default function getIcon(animal: string) {
  switch (animal) {
    case "fox":
      return fox;
    case "cat":
      return cat;
    case "hog":
      return hog;
    case "elk":
      return elk;
    case "beaver":
      return beaver;
    case "bear":
      return bear;
    default:
      return fox;
  }
}
