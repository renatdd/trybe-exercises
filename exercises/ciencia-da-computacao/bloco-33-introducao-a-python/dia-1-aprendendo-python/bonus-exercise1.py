#  Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 . 
from functools import reduce

def get_lowest_number_of_list(input_list):
    # return min(input_list) or ...
    return reduce(lambda x, y: x if x < y else y, input_list)

# Ver o método sort() -> input_list.sort()
