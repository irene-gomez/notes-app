'use strict';

const buttonAddEl = document.getElementById('btnAdd');
const noteListContainerEl = document.getElementById('noteListContainer');

const paintNote = () => {
    const noteEl = document.createElement('li');
    noteEl.classList.add('note');

    const titleNote = document.createElement('p');
    const textTitle = document.createTextNode('Nota');

    titleNote.appendChild(textTitle);
    noteEl.appendChild(titleNote);
    noteListContainerEl.appendChild(noteEl);
};

const handleButtonClick = () => {
    paintNote();
};

buttonAddEl.addEventListener('click', handleButtonClick);
