# Exercício 4: Um posto está vendendo combustíveis
# com a seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma:
# A - álcool, G - gasolina), e retorne o valor a ser pago
# pelo cliente, sabendo-se que o preço do litro da gasolina
# é R$ 2,50, e o preço do litro do álcool é R$ 1,90. 

def validate_args(args, VALID_FUEL_TYPES = ("A", "G")):
    invalid_num_args = len(args) != 2
    if (invalid_num_args):
        raise Exception("Must pass fuel liters sold and fuel type")

    invalid_type_arg = args[1] not in VALID_FUEL_TYPES
    if (invalid_type_arg):
        raise Exception(f"Fuel type must be {' or '.join(VALID_FUEL_TYPES)}")

def get_price_and_discount(
        fuel_type,
        fuel_liters_sold,
        price_and_discounts = None,
        MAX_DISCOUNT_LITERS_ABOVE = 20
    ):

    price_and_discounts_by_type = price_and_discounts or {
        "A": {
            "price": 1.9,
            "min": 0.03,
            "max": 0.05,
        },
        "G": {
            "price": 2.5,
            "min": 0.04,
            "max": 0.06,
        },
    }

    discount = "max" if fuel_liters_sold > MAX_DISCOUNT_LITERS_ABOVE else "min"

    return (
        price_and_discounts_by_type[fuel_type]["price"],
        price_and_discounts_by_type[fuel_type][discount]
    )

def calculate_sale(*args, MAX_DISCOUNT_LITERS_ABOVE = 20):
    validate_args(args)

    fuel_liters_sold, fuel_type = args

    price, discount = get_price_and_discount(
        fuel_type,
        fuel_liters_sold,
        MAX_DISCOUNT_LITERS_ABOVE = MAX_DISCOUNT_LITERS_ABOVE
    )

    return fuel_liters_sold * price * (1 - discount)
