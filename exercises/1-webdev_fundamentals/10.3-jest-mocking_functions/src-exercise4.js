/*
Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em
caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve
receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a
primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova
implementação deve retornar a última letra de uma string. A terceira deve receber três strings e
concatená-las.
*/

const getUpperCaseFor = string => string.toUpperCase();

const getFirstCharOf = string => string[0];

const concatenate = (firstString, secondString) => { return firstString + secondString; };

module.exports = { getUpperCaseFor, getFirstCharOf, concatenate };
