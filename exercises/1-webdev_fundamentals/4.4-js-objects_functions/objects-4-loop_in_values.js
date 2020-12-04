/* 
EXERCÍCIO:

4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`)

info.recorrente = "Sim"
// info["recorrente"] = Sim // alternativa

for (let key in info) {
  console.log(key)
}
// Início da resposta do exercício 4
for (let key in info) {
  console.log(info[key])
}
