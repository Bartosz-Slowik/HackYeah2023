export type IReport = {
  id: string;
  title: string;
  animal: string;
  description: string;
  image: string;
  location: {
    coordinates: number[];
  };
};

export const temp: IReport[] = [
  {
    id: "1",
    title: "fox",
    animal: "fox",
    description: "fox",
    image: "fox.jpg",
    location: {
      coordinates: [19.941015236678783, 50.06111434728838],
    },
  },
  {
    id: "2",
    title: "fox2",
    animal: "fox",
    description: "fox2",
    image: "fox.jpg",
    location: {
      coordinates: [19.941015236678783, 50.06301434728838],
    },
  },
];
