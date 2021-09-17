# Exercício 4: Crie uma função que receba uma lista
# de nomes e retorne o nome com a maior quantidade
# de caracteres. Por exemplo, para 
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

def get_longest_string(string_list):
    length_list = [len(i) for i in string_list]
    greatest_length_index = length_list.index(max(length_list))
    return string_list[greatest_length_index]

def get_longest_string_with_reduce(string_list):
    from functools import reduce
    return reduce(lambda x, y : x if len(x) > len(y) else y, string_list)
