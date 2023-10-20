
def findTheSingleOn(array_of_numbers):
    for number in array_of_numbers:
        if array_of_numbers.count(number) == 1:
            return number
