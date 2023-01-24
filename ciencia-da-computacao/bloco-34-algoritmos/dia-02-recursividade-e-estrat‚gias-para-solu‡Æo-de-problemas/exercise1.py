# Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).
def num_pares(n):
    num_of_pairs = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            num_of_pairs += 1
    return num_of_pairs

print(num_pares(100))