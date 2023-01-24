def sum(number):
    if number == 0:
        return number
    else:
        return number + sum(number - 1)

print(sum(4))