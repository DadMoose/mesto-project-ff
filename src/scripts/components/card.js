import {deleteCardAPI, toggleLike} from "./api";

export function createCard(cardData, profileDataID, deleteCard, handleLikeClick, handleImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const buttonLike = cardElement.querySelector('.card__like-button');
  const likeCount = cardElement.querySelector('.card__like-count');
  const cardElementID = cardData._id;

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  likeCount.textContent = cardData.likes.length;
  buttonLike.addEventListener('click', () => handleLikeClick(buttonLike, cardData, profileDataID, likeCount));
  cardImage.addEventListener('click', () => handleImageClick(cardImage, cardTitle));

  if (cardData.owner._id === profileDataID) {
    buttonDelete.addEventListener('click', () => deleteCard(cardElement, cardElementID));
  } else {
    buttonDelete.remove();
  }

  if (isCardLiked(cardData, profileDataID)) {
    buttonLike.classList.add('card__like-button_is-active');
  } else {
    buttonLike.classList.remove('card__like-button_is-active');
  }

  return cardElement;
}

export function deleteCard(card, cardID) {
  deleteCardAPI(cardID)
    .then(() => {
      card.remove();
    })
    .catch(err => console.error(`Ошибка при выполнении операции: ${err}`));
}

export function likeCard(button, cardData, profileDataID, likeCounter) {
  const isLiked = isCardLiked(cardData, profileDataID);

  toggleLike(cardData._id, isLiked)
    .then(updatedCard => {
      cardData.likes = updatedCard.likes;
      likeCounter.textContent = cardData.likes.length;

      if (isLiked) {
        button.classList.remove('card__like-button_is-active');
      } else {
        button.classList.add('card__like-button_is-active');
      }
    })
    .catch((err) => {
      `Не удалось поставить лайк: ${err}`
    })
}

function isCardLiked(card, userID) {
  return card.likes.some(like => like._id === userID);
}