const initialDateInput = document.querySelector('#initial-date-input');
const initialDateValidation = document.querySelector('#initial-date-validation');
const submitButton = document.querySelector('#submit-button');
const resetButton = document.querySelector('#reset-button');
const statesSelect = document.querySelector('#state-input');
const dataConsolitationDiv = document.querySelector('#data-consolidation');
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

function propObjectToArray(propObject) {
  const outputArray = [];
  const objectKeys = Object.keys(propObject);
  for (let index = 0; index < objectKeys.length; index += 1) {
    const key = objectKeys[index];
    const value = propObject[key];
    outputArray.push({ key, value });
  }
  return outputArray;
}

function handleProperties(element, propObject) {
  const properties = propObjectToArray(propObject);
  for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex += 1) {
    const property = properties[propertyIndex];
    if (property.key === 'style') {
      handleProperties(element.style, property.value);
    } else {
      element[property.key] = property.value;
    }
  }
}

function createNewElement(tag, propObject) {
  const element = document.createElement(tag);
  handleProperties(element, propObject);
  return element;
}

function makeFieldSetTableTitle(fieldSet) {
  const fieldSetTitleText = fieldSet.firstElementChild.innerText;
  const titleTR = createNewElement('tr', {});
  const titleTH = createNewElement('th', {colspan: 2, innerHTML: fieldSetTitleText});
  titleTR.appendChild(titleTH);
  return titleTR;
}

function makeElementRow(element) {
  const row = createNewElement('tr', {});
  const label = element.labels[0];
  console.log(label);
  if (label) {
    const labelCol = createNewElement('td', {
      innerHTML: label.innerText,
    });
    row.appendChild(labelCol);
  }
  const value = element.value;
  const valueCol = createNewElement('td', {
    innerHTML: value,
  });
  row.appendChild(valueCol);
  return row;
}

function checkForUnconstrainedElement(element) {
  return (element.type !== 'radio') && (element.type !== 'submit') && (element.type !== 'reset');
}
function checkForRadioRestrictions(element) {
  return (element.type === 'radio') && (element.checked === true);
}

function checkForValidElement(element) {
  const isUnconstrainedElement = checkForUnconstrainedElement(element);
  const isValidRadioElement = checkForRadioRestrictions(element);
  return isUnconstrainedElement || isValidRadioElement;
}

function makeElementsRows(fieldSet, consolidateTable) {
  for (let index = 0; index < fieldSet.elements.length; index += 1) {
    const element = fieldSet.elements[index];
    const isValidElement = checkForValidElement(element);
    if (isValidElement) {
      const elementRow = makeElementRow(element);
      consolidateTable.appendChild(elementRow);
      console.log(element, isValidElement)
    }
  }
}

function consolidateFormData() {
  const fieldSets = document.getElementsByTagName('fieldset');
  const consolidateTable = createNewElement('table', {});
  for (let index = 0; index < fieldSets.length; index += 1) {
    const fieldSet = fieldSets[index];
    fieldSetTitle = makeFieldSetTableTitle(fieldSet);
    consolidateTable.appendChild(fieldSetTitle);
    makeElementsRows(fieldSet, consolidateTable);
  }
  dataConsolitationDiv.appendChild(consolidateTable);
}

function setButtonsEvents() {
  submitButton.addEventListener('click', (event) => {
    // Reference: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
    validateInputDate();
    dataConsolitationDiv.innerHTML = '';
    consolidateFormData();
    event.preventDefault();
  });
  resetButton.addEventListener('click', () => {
    dataConsolitationDiv.innerHTML = '';
    initialDateValidation.innerHTML = '';
  });
}

generateStatesOptions();
setButtonsEvents();
