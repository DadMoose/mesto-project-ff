// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
cardData = initialCards;

function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.alt;
  buttonDelete.addEventListener('click', removeCard);

  return cardElement;
}

function addCard(cardData) {
  const card = createCard(cardData);
  cardsContainer.append(card);
}

function removeCard(evt) {
  evt.target.parentElement.remove();
}

cardData.forEach(addCard);

