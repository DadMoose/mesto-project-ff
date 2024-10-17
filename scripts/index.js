// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');

function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  buttonDelete.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

function addCard(cardData) {
  const card = createCard(cardData);
  cardsContainer.append(card);
}

function deleteCard(card) {
  card.remove();
}

initialCards.forEach(addCard);

