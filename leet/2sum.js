var twoSum = function(nums, target) {
    loop1:
        for (var num1=0; num1<nums.length; num1++) {
            for (var num2=num1+1; num2<nums.length; num2++) {
                if (nums[num1]+nums[num2] === target) {
                    break loop1
                }
            }
        }
        return [num1, num2]
    
    };