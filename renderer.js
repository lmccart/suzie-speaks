// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { ipcRenderer } = require('electron');

document.querySelector('#speak').addEventListener('click', e => {
  speak();
});

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    speak();
    e.preventDefault();
  }
});

function speak() {
  let msg = document.querySelector('#msg').value;
  ipcRenderer.invoke('speak', msg);
  document.querySelector('#msg').value = '';
  document.querySelector('#msg').focus();
}