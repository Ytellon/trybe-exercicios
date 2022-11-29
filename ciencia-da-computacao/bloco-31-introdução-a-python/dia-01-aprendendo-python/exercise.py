def returnHighestNumber(a, b):
    if a > b:
        return a
    return b

def returnLowestNumber(a, b):
    if a < b:
        return a
    return b
  
print(returnHighestNumber(1, 2))

def returnAverageList(list):
    sum = 0
    for i in list:
        sum += i
    return sum / len(list)

print(returnAverageList([1, 2, 3, 4, 5]))

def returnHighestCaracteres(list):
    highest = ''
    for i in list:
        if len(i) > len(highest):
            highest = i
    return highest

print(returnHighestCaracteres(['a', 'ab', 'abcdsdsd', 'abcd']))