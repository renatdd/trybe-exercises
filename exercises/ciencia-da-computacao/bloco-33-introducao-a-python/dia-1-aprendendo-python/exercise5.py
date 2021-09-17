# Exercício 5: Considere que a cobertura da tinta é de
# 1 litro para cada 3 metros quadrados e que a tinta é
# vendida em latas de 18 litros, que custam R$ 80,00.

# Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede(em m²).

def get_cans_qqty_and_total_price(
        area,
        AREA_PER_LITER = 3,
        CAN_LITERS = 18,
        CAN_PRICE = 80.00,
    ):
    area_per_can = AREA_PER_LITER * CAN_LITERS
    is_there_area_leftover = area % area_per_can != 0
    cans_qtty = area // area_per_can
    cans_needed = cans_qtty + 1 if is_there_area_leftover else cans_qtty
    return (cans_needed, cans_needed * CAN_PRICE)


# Renato, as linhas 16 a 18 poderiam ser reescritas utilizando o método 'ceil' do pacote math.
# No caso ele arredonda pra cima quando recebe um decimal, aí não teria necessidade de fazer uma
# divisão inteira e nem calcular o resto da divisão
# `import ceil from math`
# cans_needed = ceil( area / area_per_can )