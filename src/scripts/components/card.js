export function createCard(cardData, deleteCard, handleLikeClick, handleImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const buttonLike = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-count');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  likeCount.textContent = cardData.likes.length;
  buttonDelete.addEventListener('click', () => deleteCard(cardElement));
  buttonLike.addEventListener('click', () => handleLikeClick(buttonLike));
  cardImage.addEventListener('click', () => handleImageClick(cardData));

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(button) {
  button.classList.toggle('card__like-button_is-active');
}