export const countArray = (nums) => {
    console.log("\n---- count array program ----");
    if(!(Array.isArray(nums))){
        throw new Error("Harus bertipe array of numbers");
    }
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        if(typeof nums[i] !== "number"){
        throw new Error("Harus bertipe array of numbers");
        }
        result *= nums[i];
    }
    return result;
};
