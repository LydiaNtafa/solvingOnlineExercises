#solution 1 28ms
class Solution(object):
    def runningSum(self, nums):
        result = []
        for i in range(len(nums)):
            result.append(sum(nums[0:(i+1)]))
        return result
    
#solution 2 22ms
class Solution(object):
    def runningSum(self, nums):
        return [sum(nums[0:(i+1)]) for i in range(len(nums))]

#solution 3 28 ms but only iterates once, 
# so better for bigger arrays (less complex)
class Solution(object):
    def runningSum(self, nums):
        for i in range(1,len(nums)):
            nums[i]+=nums[i-1]
        return nums