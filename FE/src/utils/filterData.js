const category = [
  {
    _id: 1,
    name: "MEN",
  },
  {
    _id: 2,
    name: "WOMAN",
  },
  {
    _id: 3,
    name: "ACCESSORIES",
  },
];

const prices = [
  {
    _id: 0,
    name: "All",
    array: [],
  },
  {
    _id: 1,
    name: "40,000 ~ 60,000",
    array: [40000, 60000],
  },
  {
    _id: 2,
    name: "60,000 ~ 80,000",
    array: [60000, 80000],
  },
  {
    _id: 3,
    name: "80,000 ~ 100,000",
    array: [80000, 100000],
  },
  {
    _id: 4,
    name: "100,000 ~ ",
    array: [100000, 999999],
  },
];

export { category, prices };
