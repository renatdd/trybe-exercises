/* 
EXERCÍCIO:

2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console. 

*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`)

// Início da resposta do exercício 2
info.recorrente = "Sim"
// info["recorrente"] = Sim // alternativa

console.log(info)
