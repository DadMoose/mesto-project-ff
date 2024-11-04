export {initialCards};

const arkhyzImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const chelyabinskOblastImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg', import.meta.url);
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const kholmogorskyRayonImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

const initialCards = [
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