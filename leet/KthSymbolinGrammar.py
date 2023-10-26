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