// map
// filter

export const manualBuildInFilter = (data, callbackFn) => {
  if(!Array.isArray(data)){
    throw new Error("Invalid input");
  }
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const value = callbackFn(data[i]);
    if(typeof value !== "number" || typeof value !== "string") continue;
    result = [...result,value];
  }
  return result;
};

export const manualBuildInMap = (data,callbackFn) => {
  if(!Array.isArray(data)){
    throw new Error("Invalid input");
  }
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const value = callbackFn(data[i]);
    result = [...result,value];
  }
  return result;
};
