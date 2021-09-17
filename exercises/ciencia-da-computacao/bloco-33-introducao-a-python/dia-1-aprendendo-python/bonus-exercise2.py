# Exercício 2: Faça um programa que, dado um valor n qualquer,
# tal que n > 1 , imprima na tela um triângulo retângulo com
# n asteriscos de base. Por exemplo, para n = 5 o triângulo 
# terá 5 asteriscos na base:

# n = 5

# *
# **
# ***
# ****
# *****

def print_triangle_with_base(number):
    triangle_list = [i * "*" for i in range(1, number + 1)]
    print("\n".join(triangle_list))
