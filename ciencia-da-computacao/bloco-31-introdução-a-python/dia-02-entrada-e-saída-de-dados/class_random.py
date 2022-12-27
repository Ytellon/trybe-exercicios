import random

random_number = random.randint(1, 10)  # escolhe um número aleatório entre 1 e 10
guess = ""

while guess != random_number:  # enquanto não adivinhar o número
    guess = int(input("Qual o seu palpite? "))  # pergunte a pessoa usuária um número

print("O número sorteado era: ", guess)

# NAME = input("Insira seu nome: ")

# for letter in NAME:
#     print(letter)

# nums = input("Insira valores aqui, separados por espaço: ")

# numsArr = nums.split(" ")

# sum = 0
# for num in numsArr:
#     if not num.isdigit():
#         print(f"Erro ao somar valores, {num} não é um dígito.")
#     else:
#         sum += int(num)

# print(f"A soma dos valores válidos é: {sum}")
