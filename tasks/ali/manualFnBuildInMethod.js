// map
// filter

const callbackFnFilter = (element,index,array) => {
    if(element % 2 === 0){
      return element
    }
}  

const callbackFnMap = (element,index,array) =>{
  return element * 2
}

export const manualBuildInFilter = (data, callbackFn) => {
  let result = []
  for (let i = 0; i < data.length; i++) {
    let value = callbackFn(data[i])
    if(value === undefined) continue
    result = [value, ...result]
  }
  return result
};

export const manualBuildInMap = (data,callbackFn) => {
      let result = []
  for (let i = 0; i < data.length; i++) {
    let value = callbackFn(data[i])
    if(value === undefined) continue
    result = [...result,value]
  }
  return result
};
