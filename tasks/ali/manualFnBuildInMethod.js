// map
// filter

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
