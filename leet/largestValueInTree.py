def largestValues(root):
        result = []
        current_index=0
        for i in range(15):
            number_of_children = 1*2**i 
            if number_of_children==1 :
                result.append(root[0])
                current_index=1
            else:
                new_index = current_index+number_of_children
                nodes = root[current_index:new_index]
                result.append(max(nodes))
                current_index = new_index
            if current_index>=len(root):
                return result
            
print(largestValues([1,3,2,5,3,0,9]))