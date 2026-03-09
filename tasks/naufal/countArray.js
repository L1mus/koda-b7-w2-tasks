export const countArray = (nums) => {
    console.log("\n---- count array program ----");
    let result = 1
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i]
    }
    console.log(result);
}
