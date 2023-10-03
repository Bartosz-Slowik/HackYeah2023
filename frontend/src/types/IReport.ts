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
      coordinates: [19.96757551913655, 50.0541839396203],
    },
  },
  {
    id: "2",
    title: "fox2",
    animal: "fox",
    description: "fox2",
    image: "fox.jpg",
    location: {
      coordinates: [19.97752488755497, 50.03635887084961],
    },
  },
  {
    id: "3",
    title: "cat",
    animal: "cat",
    description: "fox",
    image: "fox.jpg",
    location: {
      coordinates: [19.941015236678783, 50.06111434728838],
    },
  },
  {
    id: "4",
    title: "cat",
    animal: "fox",
    description: "fox",
    image: "fox.jpg",
    location: {
      coordinates: [19.969249366435292, 50.05608509412178 ],
    },
  },
  {
    id: "5",
    title: "cat",
    animal: "elk",
    description: "fox",
    image: "fox.jpg",
    location: {
      coordinates: [19.988877696174445, 50.0590237829852 ],
    },
  },
  {
    id: "6",
    title: "fox2",
    animal: "hog",
    description: "fox2",
    image: "fox.jpg",
    location: {
      coordinates: [19.84123505453048, 50.07485260470357],
    },
  },
];
