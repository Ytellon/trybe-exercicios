#🚀 Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

def find_max_num_aux(list, size):
    if size == 1:
        return list[0]
    else:
        max_num_of_rest = find_max_num_aux(list, size-1)
        if max_num_of_rest > list[size-1]:
            return max_num_of_rest
        else:
            return list[size-1]

def find_max_num(list):
    size = len(list)
    return find_max_num_aux(list, size)

print(find_max_num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))