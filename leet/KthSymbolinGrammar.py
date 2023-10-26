# We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. 
# Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01,
# and each occurrence of 1 with 10.
# For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
# Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

#Solution that passes but triggers a RuntimeError for n=30
class Solution(object):
    def kthGrammar(self, n, k):
        n -= 1
        k -= 1
        array = ["0"]
        if n>0:
            for i in range (1,n+1):
                new_element= array[i-1]
                for digit in array[i-1]:
                    if digit=="0":
                        new_element+="1"
                    else:
                        new_element+="0"
                array.append(new_element)
        return int(array[n][k])
    

# we only need to find the first half of the required array.
# then see if the k is in that half and return that
# otherwise return the opposite (0 for 1 and 1 for 0) 