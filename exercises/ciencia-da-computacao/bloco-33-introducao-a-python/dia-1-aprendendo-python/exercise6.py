# Exercício 6: Crie uma função que receba os três lados
# de um triângulo e informe qual o tipo de triângulo
# formado ou "não é triangulo" , caso não seja possível
# formar um triângulo.

# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def get_triangle_type(*sides_measures):
    if len(sides_measures) > 3: return "Não é triangulo"
    unique_measures = { measure for measure in sides_measures }
    triangle_types_by_unique_measures = {
        1: "Triângulo Equilátero",
        2: "Triângulo Isósceles",
        3: "Triângulo Escaleno",
    }
    return triangle_types_by_unique_measures[len(unique_measures)]
