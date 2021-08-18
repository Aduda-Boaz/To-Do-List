/* eslint-disable no-unused-vars */
import _, { create } from 'lodash';
import './style.css';

const doList = [
  {
    descriptlion: 'Go to the library',
    completed: 'false',
    index: 0,
  },
  {
    descriptlion: 'Do some exercise',
    completed: 'false',
    index: 1,
  },
  {
    descriptlion: 'Go camping',
    completed: 'false',
    index: 3,
  }
];

const createList = (list) => {
  const li = document.createElement('li');

  li.innerHTML = `
    <li clas"list-items'>
      <label class="list-label">
        <input type="checkbox" value="${list.completed}">
        <p class="list-description">${list.description}</p>
      </label>
    <i class="icon-remove"></i>
    </li>
  `;
  return li;
};

const displayList = (doList) => {
  const listDo = document.querySelector('.todo-list');

  doList.forEach((element) => {
    const li = createList(element);
    listDo.appendChild(li);
  });
};