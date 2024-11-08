import {openModal, closeModal, handleCrossClick, handleEscKeyUp} from './components/modal'
import {initialCards, createCard, deleteCard, likeCard} from './components/cards';
import '../pages/index.css';

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
const buttonEdit = content.querySelector('.profile__edit-button');
const buttonAdd = content.querySelector('.profile__add-button');


function addCard(cardData) {
  const card = createCard(cardData, likeCard, popupImageView);
  cardsContainer.append(card);
}

function handlePopupTypeEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupTypeEdit);
}

function handlePopupTypeNewCard(evt) {
  evt.preventDefault();
  initialCards.unshift({name: placeNameInput.value, link: linkInput.value, alt: ''});
  const card = createCard(initialCards[0]);
  cardsContainer.prepend(card);
  addImageForm.reset();
  closeModal(popupTypeNewCard);
}

function popupImageView(image) {
  popupTypeImage.style.backgroundColor = 'rgba(0, 0, 0, .9)';
  const popupImage = popupTypeImage.querySelector('.popup__image');
  const popupCaption = popupTypeImage.querySelector('.popup__caption');

  popupImage.src = image.link;
  popupImage.alt = image.alt;
  popupCaption.textContent = image.name;
}

initialCards.forEach(addCard);

buttonEdit.addEventListener('click', function() {
  openModal(popupTypeEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
})

buttonAdd.addEventListener('click', () => openModal(popupTypeNewCard));

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card__image')) {
    openModal(popupTypeImage);
  }
});

popupTypeEdit.addEventListener('submit', handlePopupTypeEditSubmit);

popupTypeNewCard.addEventListener('submit', handlePopupTypeNewCard);

