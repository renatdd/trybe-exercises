# Exercício 3: Crie uma função que receba um número
# inteiro N e retorne o somatório de todos os números
# de 1 até N . Por exemplo, para N = 5 , o valor esperado será 15 . 

from functools import reduce

def sum_all_numbers_until(number):
    return reduce(lambda x, y: x + y, range(number + 1))
