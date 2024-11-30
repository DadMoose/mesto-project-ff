import {openModal, closeModal} from './components/modal.js';
import {createCard, deleteCard, likeCard} from './components/card.js';
import {enableValidation, clearValidation} from "./components/validation.js";
import {addNewCard, loadProfileAndCard, updateAvatar, updateProfile} from "./components/api.js";
import '../pages/index.css';

const content = document.querySelector('.content');
const profileImage = content.querySelector('.profile__image');
const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');
const cardsContainer = content.querySelector('.places__list');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupTypeEditAvatar = document.querySelector('.popup_type_edit-avatar');
const avatarLinkInput = popupTypeEditAvatar.querySelector('.popup__input_type_url');
const buttonEditAvatar = content.querySelector('.profile__avatar-edit-button');
const nameInput = popupTypeEdit.querySelector('.popup__input_type_name');
const jobInput = popupTypeEdit.querySelector('.popup__input_type_description');
const placeNameInput = popupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInput = popupTypeNewCard.querySelector('.popup__input_type_url');
const buttonEdit = content.querySelector('.profile__edit-button');
const buttonAdd = content.querySelector('.profile__add-button');

function addCard(cardData, profileDataID) {
  const card = createCard(cardData, profileDataID, deleteCard, likeCard, popupImageView);
  cardsContainer.append(card);
}

function handlePopupTypeEditSubmit(evt) {
  evt.preventDefault();
  updateProfile(nameInput.value, jobInput.value)
    .then(data => {
      if(data) {
        profileTitle.textContent = data.name;
        profileDescription.textContent = data.about;
        console.log('Данные профиля успешно обновлены');
      }
    })
    .catch(err => {
      console.log(`Не удалось обновить данные профиля: ${err}`);
    });
  closeModal(popupTypeEdit);
}


function handlePopupTypeNewCardSubmit(evt) {
  evt.preventDefault();
  addNewCard(placeNameInput.value, linkInput.value)
    .then(data => {
      if(data) {
        const profileID = data.owner._id;
        const card = createCard(data, profileID, deleteCard, likeCard, popupImageView);

        cardsContainer.prepend(card);
      }
    })
    .catch(err => {
      console.log(`Не удалось добавить карточку: ${err}`);
    });

  clearValidation(popupTypeNewCard, validationConfig);
  closeModal(popupTypeNewCard);
}

function handlePopupTypeEditAvatarSubmit(evt) {
  evt.preventDefault();
  const buttonSubmit = popupTypeEditAvatar.querySelector('.popup__button');
  buttonSubmit.textContent = 'Cохранение...';

  updateAvatar(avatarLinkInput.value)
    .then((profileData) => {
      if (profileData) {
        profileImage.style.backgroundImage = `url('${profileData.avatar}')`;
      }
    })
    .then(() =>{
      clearValidation(popupTypeEditAvatar, validationConfig);
      closeModal(popupTypeEditAvatar);
    })
    .catch((err) => {console.log(`Аватар не был обновлён: ${err}`)})
    .finally(() => {
      buttonSubmit.textContent = 'Сохранить';
    })


}

function popupImageView(cardData) {
  const popupImage = popupTypeImage.querySelector('.popup__image');
  const popupCaption = popupTypeImage.querySelector('.popup__caption');

  popupImage.src = cardData.link;
  popupImage.alt = cardData.alt;
  popupCaption.textContent = cardData.name;
}

buttonEdit.addEventListener('click', function() {
  openModal(popupTypeEdit);
  clearValidation(popupTypeEdit, validationConfig);
})

buttonAdd.addEventListener('click', () => openModal(popupTypeNewCard));

buttonEditAvatar.addEventListener('click', () => openModal(popupTypeEditAvatar));

cardsContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('card__image')) {
    openModal(popupTypeImage);
  }
});

popupTypeEdit.addEventListener('submit', handlePopupTypeEditSubmit);

popupTypeNewCard.addEventListener('submit', handlePopupTypeNewCardSubmit);

popupTypeEditAvatar.addEventListener('submit', handlePopupTypeEditAvatarSubmit);

const validationConfig =
  {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
  };

enableValidation(validationConfig);

loadProfileAndCard(profileTitle, profileDescription, profileImage, addCard);
