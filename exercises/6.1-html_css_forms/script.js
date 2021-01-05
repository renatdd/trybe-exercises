const initialDateInput = document.querySelector('#initial-date-input');
const initialDateValidation = document.querySelector('#initial-date-validation');
const submitButton = document.querySelector('#submit-button');
const resetButton = document.querySelector('#reset-button');
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

const validationPatterns = {
  dateFormat: input => {
    return (input.length === 3);
  },
  dayValue: input => {
    return (input[0] > 0 && input[0] <= 31);
  },
  monthValue: input => {
    return (input[1] > 0 && input[1] <= 12);
  },
  yearValue: input => {
    return (input[2] >= 0 && input[2] !== '' && input[2] < 2022);
  },
}

const dateValidators = [
  {
    validation: validationPatterns.dateFormat,
    message: 'Data não está no formato dd/mm/aaaa',
  },
  {
    validation: validationPatterns.dayValue,
    message: 'Valor de dia inválido',
  },
  {
    validation: validationPatterns.monthValue,
    message: 'Valor de mês inválido',
  },
  {
    validation: validationPatterns.yearValue,
    message: 'Valor de ano inválido',
  },
];

function validateInputDate(event) {
  initialDateValidation.innerHTML = '';
  const dateArray = initialDateInput.value.split('/');
  for (let index = 0; index < dateValidators.length; index += 1) {
    const validatorObj = dateValidators[index];
    const validation = validatorObj.validation(dateArray);
    if (!validation) {
      initialDateValidation.innerHTML = validatorObj.message;
      break;
    }
  }
}

function setButtonsEvents() {
  submitButton.addEventListener('click', function () {
    validateInputDate();
  });
}

generateStatesOptions();
setButtonsEvents();
