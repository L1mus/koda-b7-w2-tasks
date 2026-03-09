// map
// filter

const data = [
  {
    id: 1,
    name: "Ali Mustadji",
    hobbies: [
      "running",
      "gaming",
      "swimming",
      "programming",
      "soccer",
      "basketball",
    ],
  },
  { id: 2, name: "John Doe", hobbies: ["running", "programming", "sketting"] },
  { id: 3, name: "John Takeuchi", hobbies: ["gaming", "fishing", "swimming"] },
  {
    id: 4,
    name: "Sir Alex Ferguson ",
    hobbies: ["running", "basketball", "coaching"],
  },
  {
    id: 5,
    name: "Cristiano Messi",
    hobbies: ["running", "soccer", "swimming"],
  },
];

export const manualBuildIFilter = (data, search) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    let value = data[i];
    for (let hobbie of value.hobbies) {
      if (hobbie === search) {
        result.push(value);
      }
    }
  }
  return result;
};

export const manualBuildInMap = (data, ...infomation) => {
  const result = [];
  const map = new Map();
  for (let i = 0; i < data.length; i++) {
    let value = data[i];
    for (let key of infomation) {
      map.set(key, value[key]);
    }
    result.push(Object.fromEntries(map));
  }
  return result;
};
