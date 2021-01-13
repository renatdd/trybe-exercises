// var logo = document.querySelector('body');
// logo.addEventListener('wheel',function () {
//   var nav = document.querySelector('nav');
//   nav.style.display = 'block';
//   nav.style.position = 'fixed';
//   nav.style.top = '0';
// })

const storageKey = 'stylePreferences';
const preferencesIcon = document.querySelector('#preferences-icon');
const preferencesMenu = document.querySelector('#preferences-menu');
const closeIcon = document.querySelector('#close-icon');
preferencesIcon.addEventListener('click', function() {
  showAndHideElement({ show: preferencesMenu, hide: preferencesIcon });
});
closeIcon.addEventListener('click', function() { 
  showAndHideElement({ show: preferencesIcon, hide: preferencesMenu });
});

function manageIconFocus(icon) {
  icon.addEventListener('mouseover', function() { highlight(icon); });
  icon.addEventListener('mouseout', function() { highlight(icon); });
}

manageIconFocus(preferencesIcon);
manageIconFocus(closeIcon);

function highlight(event) {
  let eventState = event.style['opacity'];
  let opacity = '1';
  if (eventState === opacity) {
    opacity = '0.2';
  }
  event.style['opacity'] = opacity;
}

function showAndHideElement(inputObject) {
  inputObject.show.style.display = 'block';
  inputObject.hide.style.display = 'none';
}

let stylePreferences = {
  fontSize: '',
}

function loadClientPreferences() {
  return JSON.parse(storage.getItem(storageKey));
}

function setPreferences() {
  localStorage.setItem(storageKey, JSON.stringify(stylePreferences));
}

setPreferences();

// localStorage.clear();
