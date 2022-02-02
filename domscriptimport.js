`use strict`

import * as DOM from './domscript.js';

let str = "You are Rebel Scum";

let changeText = str => DOM.pageParagraph.innerHTML = `${str}`;

DOM.pageButton.onclick = () => addToList(DOM.pageInput.value); //changeText(DOM.pageInput.value);

function addToList(str) {

  let child = document.createElement(`Jedi`);
  child.innerHTML = str;
  DOM.pageList.appendChild(child);

}
