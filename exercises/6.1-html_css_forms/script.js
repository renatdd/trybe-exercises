const statesSelect = document.querySelector('#state-input');
const states = {
  'Acre': 'AC',
  'Alagoas': 'AL',
  'Amapá': 'AP',
  'Amazonas': 'AM',
  'Bahia': 'BA',
  'Ceará': 'CE',
  'Distrito Federal': 'DF',
  'Espírito Santo': 'ES',
  'Goiás': 'GO',
  'Maranhão': 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  'Pará': 'PA',
  'Paraíba': 'PB',
  'Paraná': 'PR',
  'Pernambuco': 'PE',
  'Piauí': 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  'Rondônia': 'RO',
  'Roraima': 'RR',
  'Santa Catarina': 'SC',
  'São Paulo': 'SP',
  'Sergipe': 'SE',
  'Tocantins': 'TO',
};

function createStateOption(stateObj) {
  const optionElement = document.createElement('option');
  optionElement.value = stateObj.abbreviation;
  optionElement.innerText = stateObj.name;
  return optionElement;
}

function generateStatesOptions() {
  Object.entries(states).map(function (entry) {
    const entryObj = {
      name: entry[0],
      abbreviation: entry[1],
    };
    const stateOption = createStateOption(entryObj);
    statesSelect.append(stateOption);
  });
}

generateStatesOptions();
