import {openModal, closeModal, handleCrossClick, handleEscKeyUp} from './components/modal'

import '../pages/index.css';
import {initialCards} from './cards';

const content = document.querySelector('.content');
const cardsContainer = content.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

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