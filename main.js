'use strict';

const buttonAddEl = document.getElementById('btnAdd');
const noteListContainerEl = document.getElementById('noteListContainer');

const addNewNote = () => {
    const noteEl = document.createElement('li');
    noteEl.classList.add('noteItem');

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
    const textBody = document.createTextNode('Lorem ipsum dolor...');

    noteEl.appendChild(headerNoteEl);
    titleNote.appendChild(textTitle);
    noteEl.appendChild(titleNote);
    textBodyEl.appendChild(textBody);
    noteBodyEl.appendChild(textBodyEl);
    noteEl.appendChild(noteBodyEl);
    noteListContainerEl.appendChild(noteEl);
};

const handleButtonClick = () => {
    addNewNote();
};

buttonAddEl.addEventListener('click', handleButtonClick);
