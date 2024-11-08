import {openModal, closeModal, handleCrossClick, handleEscKeyUp} from './components/modal'

import '../pages/index.css';
import {initialCards} from './cards';

const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const nameInput = popupTypeEdit.querySelector('.popup__input_type_name');
const jobInput = popupTypeEdit.querySelector('.popup__input_type_description');
const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');
const addImageForm = popupTypeNewCard.querySelector('.popup__form');
const placeNameInput = popupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInput = popupTypeNewCard.querySelector('.popup__input_type_url');


function createCard(cardData, handleLikeClick, handleImageClick) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const buttonLike = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.alt;
  buttonDelete.addEventListener('click', () => deleteCard(cardElement));
  buttonLike.addEventListener('click', () => handleLikeClick(buttonLike));
  cardImage.addEventListener('click', () => handleImageClick(cardData));

  return cardElement;
}

function addCard(cardData) {
  const card = createCard(cardData, likeCard, popupImageView);
  cardsContainer.append(card);
}

function deleteCard(card) {
  card.remove();
}

initialCards.forEach(addCard);

document.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('profile__edit-button')) {
    openModal(popupTypeEdit);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
  } else if (evt.target.classList.contains('profile__add-button')) {
    openModal(popupTypeNewCard);
  } else if (evt.target.classList.contains('card__image')) {
    openModal(popupTypeImage);
  }
});

function handlePopupTypeEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
}

popupTypeEdit.addEventListener('submit', handlePopupTypeEditSubmit);

function handlePopupTypeNewCard(evt) {
  evt.preventDefault();
  initialCards.unshift({name: placeNameInput.value, link: linkInput.value, alt: ''});
  const card = createCard(initialCards[0]);
  cardsContainer.prepend(card);
  addImageForm.reset();
  closeModal(popupTypeNewCard);
}

popupTypeNewCard.addEventListener('submit', handlePopupTypeNewCard);

function likeCard(evt) {
  evt.classList.toggle('card__like-button_is-active');
}

function popupImageView(image) {
  popupTypeImage.style.backgroundColor = 'rgba(0, 0, 0, .9)';
  const popupImage = popupTypeImage.querySelector('.popup__image');
  const popupCaption = popupTypeImage.querySelector('.popup__caption');

  popupImage.src = image.link;
  popupImage.alt = image.alt;
  popupCaption.textContent = image.name;
}