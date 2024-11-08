const arkhyzImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const chelyabinskOblastImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const kholmogorskyRayonImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

export const initialCards = [
    {
      name: "Архыз",
      link: arkhyzImage,
      alt: "Горные хребты Архыза"
    },
    {
      name: "Челябинская область",
      link: chelyabinskOblastImage,
      alt: "Ручей в зимнем лесу"
    },
    {
      name: "Иваново",
      link: ivanovoImage,
      alt: "Ряд панельных домов вечером, вид сверху"
    },
    {
      name: "Камчатка",
      link: kamchatkaImage,
      alt: "Камчатский пейзаж, земля поросшая мхом простирается до заснеженного вулкана"
    },
    {
      name: "Холмогорский район",
      link: kholmogorskyRayonImage,
      alt: "Одинокая железная дорога посреди леса вечером"
    },
    {
      name: "Байкал",
      link: baikalImage,
      alt: "Заснеженная скала острова Ольхон на Байкале"
    }
];

export function createCard(cardData, handleLikeClick, handleImageClick) {
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

export function deleteCard(card) {
    card.remove();
}

export function likeCard(button) {
    button.classList.toggle('card__like-button_is-active');
}