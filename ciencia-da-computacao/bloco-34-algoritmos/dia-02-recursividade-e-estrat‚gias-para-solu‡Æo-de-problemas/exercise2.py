# 🚀 Exercício 2: Transforme o algoritmo criado anteriormente em recursivo.

def num_pares(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + num_pares(n-1)
    else:
        return num_pares(n-1)

print(num_pares(100))