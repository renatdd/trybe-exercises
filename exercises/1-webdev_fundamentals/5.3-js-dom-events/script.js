
function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/* 
Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysElementList = document.querySelector('#days');
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];
  for (let index in dezDaysList) {
    let dayNumber = dezDaysList[index];
    let dayLiElement = document.createElement('li');
    dayLiElement.textContent = dayNumber;
    let dayClasses = 'day';
    if (holidays.includes(dayNumber)) {
      dayClasses += ' holiday';
    }
    if (fridays.includes(dayNumber)) {
      dayClasses += ' friday';
    }
    dayLiElement.className = dayClasses;
    daysElementList.appendChild(dayLiElement);
  }
}

createDaysOfTheMonth();

/* 
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

  Adicione a este botão a ID "btn-holiday" .
  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createBtn(textContent) {
  const parent = document.getElementsByClassName('buttons-container')[0];
  const btn = document.createElement('button');
  btn.textContent = textContent;
  if (textContent === 'Feriados') {
    btn.id = 'btn-holiday';
  } else if (textContent === 'Sexta-feira') {
    btn.id = 'btn-friday';
  }
  parent.appendChild(btn);
}

createBtn('Feriados');

/* 
Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
function highlightHolidays() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    const elementBgValue = holidays[index].style.backgroundColor;
    let color = 'yellow';
    if (elementBgValue === color) {
      color = null;
    }
    holidays[index].style.backgroundColor = color;
  }
}

function holidayBtnPress() {
  const btn = document.querySelector('#btn-holiday');
  btn.addEventListener('click', highlightHolidays);
}

holidayBtnPress();

/* 
Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
createBtn('Sexta-feira');

/* 
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
// function 

function changeFridayText() {
  const fridays = [4, 11, 18, 25];
  const fridayElements = document.querySelectorAll('.friday');
  for (let index = 0; index < fridayElements.length; index += 1) {
    const elementText = fridayElements[index].textContent;
    let text = 'Sextou!';
    if (elementText === text) {
      text = fridays[index];
    }
    fridayElements[index].textContent = text;
  }
}

function fridayBtnPress() {
  const btn = document.querySelector('#btn-friday');
  btn.addEventListener('click', changeFridayText);
}
fridayBtnPress();

/* 
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. 
*/
function dayZoomIn() {
  event.target.style.fontSize = '30px';
}

function dayZoomOut() {
  event.target.style.fontSize = '20px';
}

function zoomDays() {
  const daysUl = document.querySelector('#days');
  daysUl.addEventListener('mouseover', dayZoomIn);
  daysUl.addEventListener('mouseout', dayZoomOut);
}

zoomDays();

/* 
Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addNewTask(taskName) {
  const parentDiv = document.querySelector('.my-tasks');
  const newTask = document.createElement('span');
  newTask.innerText = taskName;
  parentDiv.appendChild(newTask);
}

addNewTask('Cozinhar');

/* 
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addLabelToTask(labelColor) {
  const parentDiv = document.querySelector('.my-tasks');
  const labelDiv = document.createElement('div');
  labelDiv.style.backgroundColor = labelColor;
  labelDiv.className = 'task';
  parentDiv.appendChild(labelDiv);
}

addLabelToTask('red');

/* 
Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function tagTaskSelected() {
  if (event.target.className.includes('selected')) {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}

function selectTask() {
  const myTasksDiv = document.querySelector('.my-tasks');
  myTasksDiv.addEventListener('click', tagTaskSelected);
}

selectTask();

/* 
Exercício 10:
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/
function selectTaskDay() {
  let taskColor = document.querySelector('.selected').style.backgroundColor;
  let dayBgValue = event.target.style.backgroundColor;
  if (dayBgValue !== '') {
    taskColor = '';
  }
  event.target.style.backgroundColor = taskColor;
}

function addTaskToDay() {
  const daysUl = document.querySelector('#days');
  daysUl.addEventListener('click', selectTaskDay);
}

addTaskToDay();

