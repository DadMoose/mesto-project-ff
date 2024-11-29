import {apiToken} from '../../../env'

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-27',
  headers: {
    authorization: apiToken,
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при загрузке карточек: ${res.status}`);
    })
    .catch(err => console.log(err));
}

const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при загрузке профиля: ${res.status}`);
    })
    .catch(err => console.log(err));
}

export function loadProfileAndCard(title, description, image, add) {
  Promise.all([getProfileInfo(), getInitialCards()])
    .then(([profileData, cards]) => {
      if(profileData) {
        title.textContent = profileData.name;
        description.textContent = profileData.about;
        image.style.backgroundImage = `url('${profileData.avatar}')`;
      }
      if(cards) {
        cards.forEach((card) => {
          add(card, profileData._id);
        });
      }
    })

    .catch(err => {console.log(`Произошла ошибка при загрузке данных: ${err}`);})
}

export function updateProfile(name, description) {
  return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
      body: JSON.stringify({
        name: `${name}`,
        about: `${description}`,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при обновлении профиля: ${res.status}`);
    })
    .catch(err => console.log(err));
}

export function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
      alt: `${name}`,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка при добавлении карточки: ${res.status}`);
    })
    .catch(err => console.log(`Карточка не была добавлена: ${err}`));
}

export function deleteCardAPI(cardID) {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    method: 'DELETE',
    headers: config.headers
  })
}

export function toggleLike(cardID, method) {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: `${method}`,
    headers: config.headers
  })
}

