/* 
EXERCÍCIO:

3 -  Faça um for/in que mostre todas as chaves do objeto.

*/

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log(`Bem-vinda, ${info.personagem}`)

info.recorrente = "Sim"
// info["recorrente"] = Sim // alternativa

// Início da resposta do exercício 3
for (let key in info) {
  console.log(key)
}
