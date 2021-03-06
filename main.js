'use strict';

const buttonAddEl = document.getElementById('btnAdd');
const noteListContainerEl = document.getElementById('noteListContainer');

const randomNumber = () => Math.floor(Math.random() * 5);

const changeColorNote = (number, item) => {
    switch (number) {
    case 0:
        item.classList.add('daisyColor');
        break;
    case 1:
        item.classList.add('skyColor');
        break;
    case 2:
        item.classList.add('pinkColor');
        break;
    case 3:
        item.classList.add('clementineColor');
        break;

    default:
        item.classList.add('grassColor');
        break;
    }
};

const closeNote = e => {
    const noteParent = e.currentTarget.parentElement.parentElement;
    noteParent.remove();
};

const addNewNote = number => {
    const noteEl = document.createElement('li');
    noteEl.classList.add('noteItem');
    changeColorNote(number, noteEl);

    // Icon close
    const headerNoteEl = document.createElement('div');
    headerNoteEl.classList.add('note__header');
    const noteCloseEl = document.createElement('span');
    noteCloseEl.classList.add('noteClose');
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas');
    closeIcon.classList.add('fa-times');
    noteCloseEl.appendChild(closeIcon);
    headerNoteEl.appendChild(noteCloseEl);
    noteCloseEl.addEventListener('click', closeNote);

    // Title note
    const titleNote = document.createElement('p');
    titleNote.classList.add('noteTitle');
    titleNote.setAttribute('contenteditable', 'true');
    const textTitle = document.createTextNode('Insertar título');

    // Body note
    const noteBodyEl = document.createElement('div');
    noteBodyEl.classList.add('noteBody');
    noteBodyEl.setAttribute('contenteditable', 'true');
    const textBodyEl = document.createElement('p');
    const textBody = document.createTextNode('Lorem ipsum whatever...');

    noteEl.appendChild(headerNoteEl);
    titleNote.appendChild(textTitle);
    noteEl.appendChild(titleNote);
    textBodyEl.appendChild(textBody);
    noteBodyEl.appendChild(textBodyEl);
    noteEl.appendChild(noteBodyEl);
    noteListContainerEl.appendChild(noteEl);
};

const handleButtonClick = () => {
    addNewNote(randomNumber());
};

buttonAddEl.addEventListener('click', handleButtonClick);
