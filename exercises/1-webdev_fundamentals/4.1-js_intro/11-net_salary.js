// Definindo variáveis
let salarioBruto = 3000;
let INSS;
let IR;

// Calcula alíquota do INSS a partir do salário bruto
switch (true) {
    case (salarioBruto < 1556.94):
        INSS = salarioBruto * 0.08;
        break;
    case (salarioBruto >= 1556.94 && salarioBruto < 2594.92 ):
        INSS = salarioBruto * 0.09;
        break;
    case (salarioBruto >= 2594.92 && salarioBruto < 5189.82):
        INSS = salarioBruto * 0.11;
        break;
    case (salarioBruto >= 5189.82):
        INSS = 570.88;
        break;
}

// Calcula salário reduzido INSS para calculo do IR
salarioReduzidoINSS = salarioBruto - INSS;

// Calcula alíquota do IR a partir do novo valor do salário
switch (true) {
    case (salarioReduzidoINSS < 1903.98):
        IR = 0;
        break;
    case (salarioReduzidoINSS >= 1903.98 && salarioReduzidoINSS < 2826.65):
        IR = salarioReduzidoINSS * 0.075 - 142.8;
        break;
    case (salarioReduzidoINSS >= 2826.65 && salarioReduzidoINSS < 3751.05):
        IR = salarioReduzidoINSS * 0.15 - 354.8;
        break;
    case (salarioReduzidoINSS >= 3751.05 && salarioReduzidoINSS < 4664.68):
        IR = salarioReduzidoINSS * 0.225 - 636.13;
        break;
    case (salarioReduzidoINSS >= 4664.68):
        IR = salarioReduzidoINSS * 0.275 - 869.36;
        break;
}

// Calcula salário líquido deduzindo IR
salarioLiquido = salarioReduzidoINSS - IR;

// Retorna resultado
console.log(salarioLiquido)
