/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = {};
    let results;
    
    for (let i = 0; i < nums.length; i++) {
        if (temp[target - nums[i]] !== undefined) {
            results = [temp[target - nums[i]], i]
        }
        
        temp[nums[i]] = i
    }
    
    return results
};

module.exports = twoSum