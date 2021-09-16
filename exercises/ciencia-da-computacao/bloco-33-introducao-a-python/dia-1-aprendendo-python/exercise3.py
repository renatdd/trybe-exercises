# Faça um programa que, dado um valor n qualquer,
# tal que n > 1 , imprima na tela um quadrado 
# feito de asteriscos de lado de tamanho n . Por exemplo:

# n = 5

# *****
# *****
# *****
# *****
# *****

def print_square(size):
    square_list = ["*" * size for _ in range(size)]
    print("\n".join(square_list))
