import faker from "faker";

export const STICKERS = [
  {
    id: faker.random.uuid(),
    title: "Belfort",
    data: new Array(100).fill(1).map((i) => ({
      id: faker.random.uuid(),
    })),
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
