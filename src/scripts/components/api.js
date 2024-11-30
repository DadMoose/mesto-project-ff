// import {apiToken} from '../../../env'

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-27',
  headers: {
    authorization: '2069e1e7-1fc1-4853-b683-9a0d07c1d4f9',
    'Content-Type': 'application/json'
  }
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(checkResponse)
  .catch(err => console.log(`Ошибка при загрузке карточек: ${err}`));
}

const getProfileInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(checkResponse)
  .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`));
}

export const loadProfileAndCard = (title, description, image, add) => {
  Promise.all([getProfileInfo(), getInitialCards()])
  .then(([profileData, cards]) => {
    if (profileData) {
      title.textContent = profileData.name;
      description.textContent = profileData.about;
      image.style.backgroundImage = `url('${profileData.avatar}')`;
    }
    if (cards) {
      cards.forEach((card) => {
        add(card, profileData._id);
      });
    }
  })

  .catch(err => {
    console.log(`Произошла ошибка при загрузке данных: ${err}`);
  })
}

export const updateProfile = (name, description) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      about: `${description}`,
    })
  })
  .then(checkResponse)
  .catch(err => {
    console.log(`Ошибка при обновлении профиля: ${err}`);
  })
}

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${name}`,
      link: `${link}`,
      alt: `${name}`,
    })
  })
  .then(checkResponse)
  .catch(err => console.log(`Ошибка при добавлении карточки: ${err}`));
}

export const deleteCardAPI = (cardID) => {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    method: 'DELETE',
    headers: config.headers
  })
}

export const toggleLike = (cardID, method) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: `${method}`,
    headers: config.headers
  })
}

export const updateAvatar = (link) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${link}`,
    })
  })
  .then(checkResponse)
  .catch((err) => {
    console.log(`Ошибка при обновлении аватара: ${err}`)
  })
}
