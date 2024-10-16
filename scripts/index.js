// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function addCard(initialCards) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = initialCards.name;
  cardElement.querySelector('.card__image').src = initialCards.link;
  cardElement.querySelector('.card__delete-button').addEventListener('click', removeCard);

  placesList.append(cardElement);
}

function removeCard(evt) {
  evt.target.parentElement.remove();
}

initialCards.forEach(addCard);

