# solution 1 2213 ms
class Solution(object):
    def twoSum(self, nums, target):
        for index1 in range(len(nums)):
            for index2 in range(index1+1,len(nums)):
                if nums[index1]+nums[index2]==target:
                    return [index1,index2]
                
#solution 2 259 ms
class Solution(object):
    def twoSum(self, nums, target):
        for index1 in range(len(nums)):
            complement = target - nums[index1]
            if complement in nums[(index1+1):len(nums)]:
                return [index1, (nums[(index1+1):len(nums)].index(complement))+(index1+1)]