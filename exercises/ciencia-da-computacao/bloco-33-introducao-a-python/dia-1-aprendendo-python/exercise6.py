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

# Só um cuidado, se você passar os lados 1 2 e 5 como parâmetro, ele retorna como triangulo escaleno
# Mas pelas condiçẽos de existencia de um triangulo esses lados não funcionariam para ser um triangulo
# https://www.calculator.net/triangle-calculator.html?vc=&vx=3&vy=2&va=&vz=5&vb=&angleunits=d&x=40&y=25
# por hora basta dizer que o lado maior é menor que a soma dos outros dois.