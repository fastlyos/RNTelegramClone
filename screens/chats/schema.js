import faker from "faker";

export const STICKERS = [
  {
    id: faker.random.uuid(),
    title: "Belfort",
    data: new Array(100).fill(1).map((i) => ({ id: faker.random.uuid() })),
  },
  {
    id: faker.random.uuid(),
    title: "Monopoly",
    data: [
      {
        id: faker.random.uuid(),
      },
      {
        id: faker.random.uuid(),
      },
      {
        id: faker.random.uuid(),
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "ARU_U",
    data: [
      {
        id: faker.random.uuid(),
      },
      {
        id: faker.random.uuid(),
      },
      {
        id: faker.random.uuid(),
      },
    ],
  },
];

export const PLACE_LOCATIONS = new Array(50).fill(1).map((i, index) => ({
  id: index,
  title: faker.random.words(2),
  address: faker.address.streetAddress(),
}));
